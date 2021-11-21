const serviceProductsController_85 = require('./serviceProductsController_85');

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceProductsController_85.getCategories();
    // console.log('results', JSON.stringify(results));
    res.render('products_85', {
      data: results,
      title: 'DB-midproject-products_85',
      name: 'ShihWei Tang',
      id: `209410785`,
    });
  } catch (err) {
    console.log('productsController getCategories', err);
  }
};
