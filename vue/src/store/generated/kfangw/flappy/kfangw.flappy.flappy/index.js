import { txClient, queryClient, MissingWalletError, registry } from './module';
// @ts-ignore
import { SpVuexError } from '@starport/vuex';
import { Params } from "./module/types/flappy/params";
import { Score } from "./module/types/flappy/score";
export { Params, Score };
async function initTxClient(vuexGetters) {
    return await txClient(vuexGetters['common/wallet/signer'], {
        addr: vuexGetters['common/env/apiTendermint']
    });
}
async function initQueryClient(vuexGetters) {
    return await queryClient({
        addr: vuexGetters['common/env/apiCosmos']
    });
}
function mergeResults(value, next_values) {
    for (let prop of Object.keys(next_values)) {
        if (Array.isArray(next_values[prop])) {
            value[prop] = [...value[prop], ...next_values[prop]];
        }
        else {
            value[prop] = next_values[prop];
        }
    }
    return value;
}
function getStructure(template) {
    let structure = { fields: [] };
    for (const [key, value] of Object.entries(template)) {
        let field = {};
        field.name = key;
        field.type = typeof value;
        structure.fields.push(field);
    }
    return structure;
}
const getDefaultState = () => {
    return {
        Params: {},
        Score: {},
        ScoreAll: {},
        _Structure: {
            Params: getStructure(Params.fromPartial({})),
            Score: getStructure(Score.fromPartial({})),
        },
        _Registry: registry,
        _Subscriptions: new Set(),
    };
};
// initial state
const state = getDefaultState();
export default {
    namespaced: true,
    state,
    mutations: {
        RESET_STATE(state) {
            Object.assign(state, getDefaultState());
        },
        QUERY(state, { query, key, value }) {
            state[query][JSON.stringify(key)] = value;
        },
        SUBSCRIBE(state, subscription) {
            state._Subscriptions.add(JSON.stringify(subscription));
        },
        UNSUBSCRIBE(state, subscription) {
            state._Subscriptions.delete(JSON.stringify(subscription));
        }
    },
    getters: {
        getParams: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Params[JSON.stringify(params)] ?? {};
        },
        getScore: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Score[JSON.stringify(params)] ?? {};
        },
        getScoreAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ScoreAll[JSON.stringify(params)] ?? {};
        },
        getTypeStructure: (state) => (type) => {
            return state._Structure[type].fields;
        },
        getRegistry: (state) => {
            return state._Registry;
        }
    },
    actions: {
        init({ dispatch, rootGetters }) {
            console.log('Vuex module: kfangw.flappy.flappy initialized!');
            if (rootGetters['common/env/client']) {
                rootGetters['common/env/client'].on('newblock', () => {
                    dispatch('StoreUpdate');
                });
            }
        },
        resetState({ commit }) {
            commit('RESET_STATE');
        },
        unsubscribe({ commit }, subscription) {
            commit('UNSUBSCRIBE', subscription);
        },
        async StoreUpdate({ state, dispatch }) {
            state._Subscriptions.forEach(async (subscription) => {
                try {
                    const sub = JSON.parse(subscription);
                    await dispatch(sub.action, sub.payload);
                }
                catch (e) {
                    throw new SpVuexError('Subscriptions: ' + e.message);
                }
            });
        },
        async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryParams()).data;
                commit('QUERY', { query: 'Params', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: { ...key }, query } });
                return getters['getParams']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryParams', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryScore({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryScore(key.addr)).data;
                commit('QUERY', { query: 'Score', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryScore', payload: { options: { all }, params: { ...key }, query } });
                return getters['getScore']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryScore', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryScoreAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryScoreAll(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryScoreAll({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'ScoreAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryScoreAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getScoreAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryScoreAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async sendMsgUpdateScore({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateScore(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateScore:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateScore:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgDeleteScore({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteScore(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteScore:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteScore:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgCreateScore({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateScore(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateScore:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateScore:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async MsgUpdateScore({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateScore(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateScore:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateScore:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgDeleteScore({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteScore(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteScore:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteScore:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgCreateScore({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateScore(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateScore:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateScore:Create', 'Could not create message: ' + e.message);
                }
            }
        },
    }
};
