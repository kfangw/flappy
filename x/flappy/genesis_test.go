package flappy_test

import (
	"testing"

	keepertest "github.com/kfangw/flappy/testutil/keeper"
	"github.com/kfangw/flappy/testutil/nullify"
	"github.com/kfangw/flappy/x/flappy"
	"github.com/kfangw/flappy/x/flappy/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		ScoreList: []types.Score{
			{
				Addr: "0",
			},
			{
				Addr: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.FlappyKeeper(t)
	flappy.InitGenesis(ctx, *k, genesisState)
	got := flappy.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.ScoreList, got.ScoreList)
	// this line is used by starport scaffolding # genesis/test/assert
}
