const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );

    return item;
  },
  updateItem(parent, args, ctx, info){
    // first take a copy of the updated
    const updates = { ...args };
    // remove ID from updates because you can't update it
    delete updates.id;
    return ctx.db.mutation.updateItem({
      data: updates,
      where: {id: args.id}
    }, info)

  }
};

module.exports = Mutations;
