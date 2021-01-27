const { Router } = require('express')
const router = Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json())

// Controller
const shopController = require('../controllers/shop')



////METHOTS
router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:_id", shopController.getProductById);

router.get("/details", shopController.getProductDetails);

router.get("/cart", shopController.getCart);

router.get("/orders", shopController.getOrders);

module.exports = router;