const mongoose = require('mongoose');
const Product = require('../models/Product');
const Category = require('../models/Category');


getIndex = async (req, res, next) => {
  console.log("Get product Index");
  const products = await Product.find().then(products => products)
  const categories = await Category.find().then(categories => categories)

  res.status(200).json({
    title: 'Shopping',
    products,
    categories,
  })
}

getProducts = async (req, res, next) => {
  console.log("Get product All");
  const products = await Product.find().then(products => products)
  const categories = await Category.find().then(categories => categories)

  res.status(200).json({
    title: 'Products',
    products,
    categories,
  })
}

getCategories = async (req, res, next) => {
  console.log("Get categories All");
  const categories = await Category.find().then(categories => categories)

  res.status(200).json({
    title: 'Categories',
    categories,
  })
}

getProductById = (req, res, next) => {
  console.log("Get product By Id");
  if (mongoose.Types.ObjectId.isValid(req.params._id)) {
    let _id = req.params._id;
    try {
      Product
        .findById(_id)
        //.findOne({name: 'Samsung S6', price: 2000})
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
  } else {
    console.log('BAD Request');
    res.status(200).json({
      err: "Not Found",
    })
  }
}

getProductsByCategory = async (req, res, next) => {
  console.log("Get products By Category");
  let _categoryId = req.params._categoryId;
  const categories = await Category.find().then(categories => categories)
  const products = await Product.find({categories: _categoryId}).then(products => products)
  try {
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
  console.log("Get user Orders");

  req.user.getOrders()
    .then((result) => {
      if (result) {
        res.status(200).json({
          title: "Orders",
          orders: result,
        })
      }
    })
    .catch(err => console.log(err));
}

getCart = (req, res, next) => {
  console.log("Get user Cart");

  //////Second way
  req.user.populate('cart.items.productId')
    .execPopulate()
    .then((user) => {
      res.status(200).json({
        title: 'User Cart',
        products: user.cart.items,
      })
    })
    .catch(err => console.log(err))

  ///////First way
  // req.user.getCart()
  //   .then((products) => {
  //     res.status(200).json({
  //       title: 'User Cart',
  //       products,
  //     })
  //   })
  //   .catch(err => console.log(err))
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

postOrders = (req, res, next) => {
  console.log("Post orders");
  req.user.addOrder()
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "Order Succeed",
        })
      } else {
        res.status(200).json({
          err: "Not Found",
        })
      }
    })
    .catch(err => console.log(err))
}


module.exports = {
  getIndex,
  getProducts,
  getCategories,
  getProductDetails,
  getProductById,
  getProductsByCategory,
  getOrders,
  getCart,
  postAddCart,
  deleteCartItem,
  postOrders,
}