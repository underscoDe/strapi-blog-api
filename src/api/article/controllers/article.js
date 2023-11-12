"use strict";

/**
 * article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  async find(ctx) {
    let entities;
    if (ctx.query.hasOwnProperty("search")) {
      console.log("search");
      entities = await strapi.entityService.findPage("api::article.article", {
        filters: {
          title: {
            $containsi: ctx.query.search,
          },
          publishedAt: {
            $notNull: true,
          },
        },
        populate: "*",
        page: ctx.query.page,
        pageSize: ctx.query.pageSize,
      });
    } else if (ctx.query.hasOwnProperty("slug")) {
      console.log("slug");
      entities = await strapi.entityService.findMany("api::article.article", {
        filters: {
          slug: ctx.query.slug,
          publishedAt: {
            $notNull: true,
          },
        },
        populate: "*",
      });
    }

    return entities;
  },
}));
