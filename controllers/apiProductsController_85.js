const serviceProductsController_85 = require('./serviceProductsController_85');

exports.getCategories = async (req, res) => {
  try {
    const data = await serviceProductsController_85.getCategories();
    return res.json(data);
  } catch (err) {
    console.log('productsController getCategories', err);
  }
};
