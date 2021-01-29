const {Router} = require('express')
const router = Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json())

// Controller
const adminController = require('../controllers/admin')


////METHOTS
/// GET ////////////////////////////////////////////////

// GET PRODUCTS
router.get('/products', adminController.getProducts);

// GET CATEGORIES
router.get('/categories', adminController.getCategories);

/// GET CATEGORY BY ID
router.get('/getAdminCategory/:_id', adminController.getAdminCategory);

// GET PRODUCT BY ID
router.get('/getAdminProduct/:_id', adminController.getAdminProduct);

      //////////////////////////////////////////// GET //////


/// POST ////////////////////////////////////////////////

// ADD PRODUCT
router.post('/add-product', adminController.addProduct);

// ADD CATEGORY
router.post('/add-category', adminController.addCategory);


// EDİT PRODUCT
router.post('/edit-product', adminController.postEditProduct);

// EDİT CATEGORY
router.post('/edit-category', adminController.postEditCategory);


// DELETE PRODUCT
router.post('/delete-product', adminController.postDeleteProduct);

///DELETE CATEGORY
router.post('/delete-category', adminController.postDeleteCategory);

      //////////////////////////////////////////// POST //////

module.exports = router;