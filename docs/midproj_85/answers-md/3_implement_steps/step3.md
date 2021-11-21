#### controllers

- productsController_85
  ![](https://i.imgur.com/HtGTP5u.png)

```
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

```

---

- serviceProductsController_85

```
const Category_85 = require('../models/Category_85');

exports.getCategories = async (req, res) => {
  try {
    return await Category_85.fetchAll();
  } catch (err) {
    console.log('getCategories', err);
  }
};

```

---

- apiProductsController_85

```
const serviceProductsController_85 = require('./serviceProductsController_85');

exports.getCategories = async (req, res) => {
  try {
    const data = await serviceProductsController_85.getCategories();
    return res.json(data);
  } catch (err) {
    console.log('productsController getCategories', err);
  }
};

```
