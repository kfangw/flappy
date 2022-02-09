package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kfangw/flappy/x/flappy/types"
)

func (k msgServer) CreateScore(goCtx context.Context, msg *types.MsgCreateScore) (*types.MsgCreateScoreResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetScore(
		ctx,
		msg.Addr,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var score = types.Score{
		Creator: msg.Creator,
		Addr:    msg.Addr,
		Score:   msg.Score,
	}

	k.SetScore(
		ctx,
		score,
	)
	return &types.MsgCreateScoreResponse{}, nil
}

func (k msgServer) UpdateScore(goCtx context.Context, msg *types.MsgUpdateScore) (*types.MsgUpdateScoreResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetScore(
		ctx,
		msg.Addr,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var score = types.Score{
		Creator: msg.Creator,
		Addr:    msg.Addr,
		Score:   msg.Score,
	}

	k.SetScore(ctx, score)

	return &types.MsgUpdateScoreResponse{}, nil
}

func (k msgServer) DeleteScore(goCtx context.Context, msg *types.MsgDeleteScore) (*types.MsgDeleteScoreResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetScore(
		ctx,
		msg.Addr,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveScore(
		ctx,
		msg.Addr,
	)

	return &types.MsgDeleteScoreResponse{}, nil
}
