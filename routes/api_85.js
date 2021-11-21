var express = require('express');
var router = express.Router();
const apiProductsController_85 = require('../controllers/apiProductsController_85');

/* GET home page. */
router.get('/category_85', apiProductsController_85.getCategories);

module.exports = router;
