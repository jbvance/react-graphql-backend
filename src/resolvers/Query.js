const { forwardTo } = require('prisma-binding');

const Query = {   
items: forwardTo('db')
// same as above - you can do when the Yoga Query and Prisma Query are the same
// and you don't care about running any custom logic
//    async items(parent, args, ctx, info) {
//        const items = await ctx.db.query.items();
//        return items;
//    }
};

module.exports = Query;
