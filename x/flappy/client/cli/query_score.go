package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/kfangw/flappy/x/flappy/types"
	"github.com/spf13/cobra"
)

func CmdListScore() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-score",
		Short: "list all score",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllScoreRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ScoreAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowScore() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-score [addr]",
		Short: "shows a score",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argAddr := args[0]

			params := &types.QueryGetScoreRequest{
				Addr: argAddr,
			}

			res, err := queryClient.Score(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
