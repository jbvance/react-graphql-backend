const { forwardTo } = require('prisma-binding');

const Query = {
  items: forwardTo('db'),
  // same as above - you can do when the Yoga Query and Prisma Query are the same
  // and you don't care about running any custom logic
  //    async items(parent, args, ctx, info) {
  //        const items = await ctx.db.query.items();
  //        return items;
  //    }
  item: forwardTo('db'),
  
  itemsConnection: forwardTo('db'),
  
  me(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user({ where: {id: ctx.request.userId }}, info);
}
};

module.exports = Query;
