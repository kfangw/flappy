package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/kfangw/flappy/x/flappy/types"
	"github.com/spf13/cobra"
)

func CmdCreateScore() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-score [addr] [score]",
		Short: "Create a new score",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexAddr := args[0]

			// Get value arguments
			argScore := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateScore(
				clientCtx.GetFromAddress().String(),
				indexAddr,
				argScore,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateScore() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-score [addr] [score]",
		Short: "Update a score",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexAddr := args[0]

			// Get value arguments
			argScore := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateScore(
				clientCtx.GetFromAddress().String(),
				indexAddr,
				argScore,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteScore() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-score [addr]",
		Short: "Delete a score",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexAddr := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteScore(
				clientCtx.GetFromAddress().String(),
				indexAddr,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
