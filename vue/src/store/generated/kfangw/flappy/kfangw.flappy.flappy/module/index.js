// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateScore } from "./types/flappy/tx";
import { MsgDeleteScore } from "./types/flappy/tx";
import { MsgCreateScore } from "./types/flappy/tx";
const types = [
    ["/kfangw.flappy.flappy.MsgUpdateScore", MsgUpdateScore],
    ["/kfangw.flappy.flappy.MsgDeleteScore", MsgDeleteScore],
    ["/kfangw.flappy.flappy.MsgCreateScore", MsgCreateScore],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgUpdateScore: (data) => ({ typeUrl: "/kfangw.flappy.flappy.MsgUpdateScore", value: MsgUpdateScore.fromPartial(data) }),
        msgDeleteScore: (data) => ({ typeUrl: "/kfangw.flappy.flappy.MsgDeleteScore", value: MsgDeleteScore.fromPartial(data) }),
        msgCreateScore: (data) => ({ typeUrl: "/kfangw.flappy.flappy.MsgCreateScore", value: MsgCreateScore.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
