var express = require('express');
var router = express.Router();
const productsController_85 = require('../controllers/productsController_85');

/* GET home page. */
router.get('/', productsController_85.getCategories);

module.exports = router;
