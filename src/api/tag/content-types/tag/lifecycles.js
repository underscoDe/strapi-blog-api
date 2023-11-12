module.exports = {
  async beforeCreate(tags) {
    if (tags.params.data.name) {
      tags.params.data.slug = tags.params.data.name
        .toLowerCase()
        .replace(/\s+/g, "-");
    }
  },
  async beforeUpdate(tags, data) {
    if (tags.params.data.name) {
      tags.params.data.slug = tags.params.data.name
        .toLowerCase()
        .replace(/\s+/g, "-");
    }
  },
};
