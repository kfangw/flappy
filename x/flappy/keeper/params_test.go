package keeper_test

import (
	"testing"

	testkeeper "github.com/kfangw/flappy/testutil/keeper"
	"github.com/kfangw/flappy/x/flappy/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.FlappyKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
