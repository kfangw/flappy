package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kfangw/flappy/x/flappy/types"
)

// SetScore set a specific score in the store from its index
func (k Keeper) SetScore(ctx sdk.Context, score types.Score) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ScoreKeyPrefix))
	b := k.cdc.MustMarshal(&score)
	store.Set(types.ScoreKey(
		score.Addr,
	), b)
}

// GetScore returns a score from its index
func (k Keeper) GetScore(
	ctx sdk.Context,
	addr string,

) (val types.Score, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ScoreKeyPrefix))

	b := store.Get(types.ScoreKey(
		addr,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveScore removes a score from the store
func (k Keeper) RemoveScore(
	ctx sdk.Context,
	addr string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ScoreKeyPrefix))
	store.Delete(types.ScoreKey(
		addr,
	))
}

// GetAllScore returns all score
func (k Keeper) GetAllScore(ctx sdk.Context) (list []types.Score) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ScoreKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Score
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
