module.exports = {
  async beforeCreate(articles) {
    if (articles.params.data.title) {
      articles.params.data.slug = articles.params.data.title
        .toLowerCase()
        .replace(/\s+/g, "-");
    }
  },
  async beforeUpdate(articles, data) {
    if (articles.params.data.title) {
      articles.params.data.slug = articles.params.data.title
        .toLowerCase()
        .replace(/\s+/g, "-");
    }
  },
};
