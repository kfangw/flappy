package simulation

import (
	"math/rand"
	"strconv"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/kfangw/flappy/x/flappy/keeper"
	"github.com/kfangw/flappy/x/flappy/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func SimulateMsgCreateScore(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)

		i := r.Int()
		msg := &types.MsgCreateScore{
			Creator: simAccount.Address.String(),
			Addr:    strconv.Itoa(i),
		}

		_, found := k.GetScore(ctx, msg.Addr)
		if found {
			return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "Score already exist"), nil, nil
		}

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           simappparams.MakeTestEncodingConfig().TxConfig,
			Cdc:             nil,
			Msg:             msg,
			MsgType:         msg.Type(),
			Context:         ctx,
			SimAccount:      simAccount,
			ModuleName:      types.ModuleName,
			CoinsSpentInMsg: sdk.NewCoins(),
			AccountKeeper:   ak,
			Bankkeeper:      bk,
		}
		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}

func SimulateMsgUpdateScore(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		var (
			simAccount = simtypes.Account{}
			score      = types.Score{}
			msg        = &types.MsgUpdateScore{}
			allScore   = k.GetAllScore(ctx)
			found      = false
		)
		for _, obj := range allScore {
			simAccount, found = FindAccount(accs, obj.Creator)
			if found {
				score = obj
				break
			}
		}
		if !found {
			return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "score creator not found"), nil, nil
		}
		msg.Creator = simAccount.Address.String()

		msg.Addr = score.Addr

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           simappparams.MakeTestEncodingConfig().TxConfig,
			Cdc:             nil,
			Msg:             msg,
			MsgType:         msg.Type(),
			Context:         ctx,
			SimAccount:      simAccount,
			ModuleName:      types.ModuleName,
			CoinsSpentInMsg: sdk.NewCoins(),
			AccountKeeper:   ak,
			Bankkeeper:      bk,
		}
		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}

func SimulateMsgDeleteScore(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		var (
			simAccount = simtypes.Account{}
			score      = types.Score{}
			msg        = &types.MsgUpdateScore{}
			allScore   = k.GetAllScore(ctx)
			found      = false
		)
		for _, obj := range allScore {
			simAccount, found = FindAccount(accs, obj.Creator)
			if found {
				score = obj
				break
			}
		}
		if !found {
			return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "score creator not found"), nil, nil
		}
		msg.Creator = simAccount.Address.String()

		msg.Addr = score.Addr

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           simappparams.MakeTestEncodingConfig().TxConfig,
			Cdc:             nil,
			Msg:             msg,
			MsgType:         msg.Type(),
			Context:         ctx,
			SimAccount:      simAccount,
			ModuleName:      types.ModuleName,
			CoinsSpentInMsg: sdk.NewCoins(),
			AccountKeeper:   ak,
			Bankkeeper:      bk,
		}
		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}
