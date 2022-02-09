package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "github.com/kfangw/flappy/testutil/keeper"
	"github.com/kfangw/flappy/x/flappy/keeper"
	"github.com/kfangw/flappy/x/flappy/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestScoreMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.FlappyKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateScore{Creator: creator,
			Addr: strconv.Itoa(i),
		}
		_, err := srv.CreateScore(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetScore(ctx,
			expected.Addr,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestScoreMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateScore
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateScore{Creator: creator,
				Addr: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateScore{Creator: "B",
				Addr: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateScore{Creator: creator,
				Addr: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.FlappyKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateScore{Creator: creator,
				Addr: strconv.Itoa(0),
			}
			_, err := srv.CreateScore(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateScore(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetScore(ctx,
					expected.Addr,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestScoreMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteScore
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteScore{Creator: creator,
				Addr: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteScore{Creator: "B",
				Addr: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteScore{Creator: creator,
				Addr: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.FlappyKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateScore(wctx, &types.MsgCreateScore{Creator: creator,
				Addr: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteScore(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetScore(ctx,
					tc.request.Addr,
				)
				require.False(t, found)
			}
		})
	}
}
