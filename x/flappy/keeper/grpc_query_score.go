package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/kfangw/flappy/x/flappy/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ScoreAll(c context.Context, req *types.QueryAllScoreRequest) (*types.QueryAllScoreResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var scores []types.Score
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	scoreStore := prefix.NewStore(store, types.KeyPrefix(types.ScoreKeyPrefix))

	pageRes, err := query.Paginate(scoreStore, req.Pagination, func(key []byte, value []byte) error {
		var score types.Score
		if err := k.cdc.Unmarshal(value, &score); err != nil {
			return err
		}

		scores = append(scores, score)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllScoreResponse{Score: scores, Pagination: pageRes}, nil
}

func (k Keeper) Score(c context.Context, req *types.QueryGetScoreRequest) (*types.QueryGetScoreResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetScore(
		ctx,
		req.Addr,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetScoreResponse{Score: val}, nil
}
