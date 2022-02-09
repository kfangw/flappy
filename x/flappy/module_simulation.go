package flappy

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/kfangw/flappy/testutil/sample"
	flappysimulation "github.com/kfangw/flappy/x/flappy/simulation"
	"github.com/kfangw/flappy/x/flappy/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = flappysimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateScore = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateScore int = 100

	opWeightMsgUpdateScore = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateScore int = 100

	opWeightMsgDeleteScore = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteScore int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	flappyGenesis := types.GenesisState{
		ScoreList: []types.Score{
			{
				Creator: sample.AccAddress(),
				Addr:    "0",
			},
			{
				Creator: sample.AccAddress(),
				Addr:    "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&flappyGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateScore int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateScore, &weightMsgCreateScore, nil,
		func(_ *rand.Rand) {
			weightMsgCreateScore = defaultWeightMsgCreateScore
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateScore,
		flappysimulation.SimulateMsgCreateScore(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateScore int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateScore, &weightMsgUpdateScore, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateScore = defaultWeightMsgUpdateScore
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateScore,
		flappysimulation.SimulateMsgUpdateScore(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteScore int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteScore, &weightMsgDeleteScore, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteScore = defaultWeightMsgDeleteScore
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteScore,
		flappysimulation.SimulateMsgDeleteScore(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
