package keeper

import (
	"github.com/kfangw/flappy/x/flappy/types"
)

var _ types.QueryServer = Keeper{}
