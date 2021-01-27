const {Router} = require('express')
const router = Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json())

// Controller
const adminController = require('../controllers/admin')


////METHOTS
// /admin/products
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.addProduct);


// /admin/getAdminProduct for Edit
router.get('/getAdminProduct/:_id', adminController.getAdminProduct);
// /admin/edit-product => POST
router.post('/edit-product', adminController.editProduct);

module.exports = router;