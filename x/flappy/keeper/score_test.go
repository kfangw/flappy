package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/kfangw/flappy/testutil/keeper"
	"github.com/kfangw/flappy/testutil/nullify"
	"github.com/kfangw/flappy/x/flappy/keeper"
	"github.com/kfangw/flappy/x/flappy/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNScore(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Score {
	items := make([]types.Score, n)
	for i := range items {
		items[i].Addr = strconv.Itoa(i)

		keeper.SetScore(ctx, items[i])
	}
	return items
}

func TestScoreGet(t *testing.T) {
	keeper, ctx := keepertest.FlappyKeeper(t)
	items := createNScore(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetScore(ctx,
			item.Addr,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestScoreRemove(t *testing.T) {
	keeper, ctx := keepertest.FlappyKeeper(t)
	items := createNScore(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveScore(ctx,
			item.Addr,
		)
		_, found := keeper.GetScore(ctx,
			item.Addr,
		)
		require.False(t, found)
	}
}

func TestScoreGetAll(t *testing.T) {
	keeper, ctx := keepertest.FlappyKeeper(t)
	items := createNScore(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllScore(ctx)),
	)
}
