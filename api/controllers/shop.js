const Product = require('../models/Product');
const Category = require('../models/Category');
const { postEditCategory } = require('./admin');


getIndex = async (req, res, next) => {
  console.log("Get product Index");
  const products = await Product.findAll().then(products => products)
  const categories = await Category.findAll().then(categories => categories)
  
  res.status(200).json({
    title: 'Shopping',
    products,
    categories,
  })
}

getProducts = async (req, res, next) => {
  console.log("Get product All");
  const products = await Product.findAll().then(products => products)
  const categories = await Category.findAll().then(categories => categories)

  res.status(200).json({
    title: 'Products',
    products,
    categories,
  })
}

getProductById = (req, res, next) => {
  console.log("Get product By Id");
  let _id = req.params._id;
  try {
    Product.findById(_id)
      .then((product) => {
        if (product != null) {
          res.status(200).json({
            title: 'Product Detail',
            product,
          })
        } else {
          console.log('BAD Request');
          res.status(200).json({
            err: "Not Found",
          })
        }
      })
  } catch (error) {
    console.log('BAD Request');
    res.status(200).json({
      err: "Not Found",
    })
  }
}

getProductsByCategory = async (req, res, next) => {
  console.log("Get products By Category");
  let _categoryId = req.params._categoryId;
  const categories = await Category.findAll().then(categories => categories)
  try {
    Product.findAllByCategoryId(_categoryId)
      .then((products) => {
        if (products != null) {
          res.status(200).json({
            title: 'Product Category',
            products,
            categories,
          })
        } else {
          console.log('BAD Request');
          res.status(200).json({
            err: "Not Found",
          })
        }
      })
  } catch (error) {
    console.log('BAD Request');
    res.status(200).json({
      err: "Not Found",
    })
  }
}


getProductDetails = (req, res, next) => {
  console.log("Get product Details");
  res.status(200).json({
    title: 'Details',
  })
}

getOrders = (req, res, next) => {
  console.log("Get product Orders");
}

getCart = (req, res, next) => {
  console.log("Get product Cart");

  req.user.getCart()
    .then((products) => {
      res.status(200).json({
        title: 'User Cart',
        products
      })
    })
    .catch(err => console.log(err))
}

postAddCart = (req, res, next) => {
  console.log("Post add Cart");

  const productId = req.body.productId;
  Product.findById(productId)
    .then((product) => {
      return req.user.addToCart(product)
    })
    .then(() => {
      ///
    })
    .catch(err => console.log(err))
}

deleteCartItem = (req, res, next) => {
  console.log("Delete cart item");
  req.user.deleteCartItem(req.body.productId)
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "Delete Successful",
        })
      } else {
        /// Fail...
        console.log('BAD Delete Request');
        res.status(200).json({
          err: "Not Found",
        })
      }
    })
}

module.exports = {
  getIndex,
  getProducts,
  getProductDetails,
  getProductById,
  getProductsByCategory,
  getOrders,
  getCart,
  postAddCart,
  deleteCartItem,
}