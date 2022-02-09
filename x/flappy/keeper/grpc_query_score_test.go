package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/kfangw/flappy/testutil/keeper"
	"github.com/kfangw/flappy/testutil/nullify"
	"github.com/kfangw/flappy/x/flappy/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestScoreQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.FlappyKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNScore(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetScoreRequest
		response *types.QueryGetScoreResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetScoreRequest{
				Addr: msgs[0].Addr,
			},
			response: &types.QueryGetScoreResponse{Score: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetScoreRequest{
				Addr: msgs[1].Addr,
			},
			response: &types.QueryGetScoreResponse{Score: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetScoreRequest{
				Addr: strconv.Itoa(100000),
			},
			err: status.Error(codes.InvalidArgument, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Score(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestScoreQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.FlappyKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNScore(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllScoreRequest {
		return &types.QueryAllScoreRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.ScoreAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Score), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Score),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.ScoreAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Score), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Score),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.ScoreAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Score),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.ScoreAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
