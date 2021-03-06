package flappy

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kfangw/flappy/x/flappy/keeper"
	"github.com/kfangw/flappy/x/flappy/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the score
	for _, elem := range genState.ScoreList {
		k.SetScore(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.ScoreList = k.GetAllScore(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
