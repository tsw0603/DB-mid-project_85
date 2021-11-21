const Category_85 = require('../models/Category_85');

exports.getCategories = async (req, res) => {
  try {
    return await Category_85.fetchAll();
  } catch (err) {
    console.log('getCategories', err);
  }
};
