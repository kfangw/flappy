package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kfangw/flappy/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateScore_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateScore
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateScore{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateScore{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateScore_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateScore
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateScore{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateScore{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteScore_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteScore
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteScore{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteScore{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
