const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Exercise",
  },
  {
    category_name: "Minfulness",
  },
  {
    category_name: "Relaxation",
  },
  {
    category_name: "Academics",
  },
  {
    category_name: "Other",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
