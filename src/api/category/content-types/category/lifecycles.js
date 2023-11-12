module.exports = {
  async beforeCreate(categories) {
    if (categories.params.data.name) {
      categories.params.data.slug = categories.params.data.name
        .toLowerCase()
        .replace(/\s+/g, "-");
    }
  },
  async beforeUpdate(categories, data) {
    if (categories.params.data.name) {
      categories.params.data.slug = categories.params.data.name
        .toLowerCase()
        .replace(/\s+/g, "-");
    }
  },
};
