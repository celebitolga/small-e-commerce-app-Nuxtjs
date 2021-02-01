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

router.get("/categories", shopController.getCategories);

router.get("/categories/:_categoryId", shopController.getProductsByCategory);

router.get("/details", shopController.getProductDetails);

router.get("/cart", shopController.getCart);

router.post("/cart", shopController.postAddCart);

router.get("/orders", shopController.getOrders);

router.post("/orders", shopController.postOrders);

router.post("/delete-cart-item", shopController.deleteCartItem)

module.exports = router;