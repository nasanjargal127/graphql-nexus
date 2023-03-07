import { list, nonNull, nullable, queryField } from "nexus";
import { BoardWhereUniqueInput } from "../inputs";
import { Board, Item } from "../models";

export const boards = queryField("boards", {
  type: nonNull(list(nonNull(Board))),
  resolve: async (_root, _args, ctx) => {
    return ctx.prisma.board.findMany({});
  },
});

export const board = queryField("board", {
  type: nullable(Board),
  args: {
    where: nonNull(BoardWhereUniqueInput),
  },
  resolve: async (root, args, ctx) => {
    return ctx.prisma.board.findUnique({
      where: {
        id: args.where.id,
      },
    });
  },
});
