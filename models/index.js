const Category = require("./Categories");
const Tag = require("./Activity");

// Activities belongsTo Category
Activity.belongsTo(Category, {
  foreignKey: "category_id",
});
// Categories have many Products
Category.hasMany(Activity, {
  foreignKey: "category_id",
});
// Activities belongToMany Tags (through ActivityTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
});
// Tags belongToMany activities (through ActivityTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Activity,
};
