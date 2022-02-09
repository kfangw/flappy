package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateScore = "create_score"
	TypeMsgUpdateScore = "update_score"
	TypeMsgDeleteScore = "delete_score"
)

var _ sdk.Msg = &MsgCreateScore{}

func NewMsgCreateScore(
	creator string,
	addr string,
	score string,

) *MsgCreateScore {
	return &MsgCreateScore{
		Creator: creator,
		Addr:    addr,
		Score:   score,
	}
}

func (msg *MsgCreateScore) Route() string {
	return RouterKey
}

func (msg *MsgCreateScore) Type() string {
	return TypeMsgCreateScore
}

func (msg *MsgCreateScore) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateScore) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateScore) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateScore{}

func NewMsgUpdateScore(
	creator string,
	addr string,
	score string,

) *MsgUpdateScore {
	return &MsgUpdateScore{
		Creator: creator,
		Addr:    addr,
		Score:   score,
	}
}

func (msg *MsgUpdateScore) Route() string {
	return RouterKey
}

func (msg *MsgUpdateScore) Type() string {
	return TypeMsgUpdateScore
}

func (msg *MsgUpdateScore) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateScore) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateScore) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteScore{}

func NewMsgDeleteScore(
	creator string,
	addr string,

) *MsgDeleteScore {
	return &MsgDeleteScore{
		Creator: creator,
		Addr:    addr,
	}
}
func (msg *MsgDeleteScore) Route() string {
	return RouterKey
}

func (msg *MsgDeleteScore) Type() string {
	return TypeMsgDeleteScore
}

func (msg *MsgDeleteScore) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteScore) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteScore) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
