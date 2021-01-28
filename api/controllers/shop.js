const Product = require('../models/product');
const Category = require('../models/category');


getIndex = (req, res, next) => {
  console.log("Get product Index");
  const products = Product.getAll();
  const categories = Category.getAllCategories();
  res.status(200).json({
    title: 'Shopping',
    products,
    categories,
  })
}

getProducts = (req, res, next) => {
  console.log("Get product All");
  const products = Product.getAll();
  const categories = Category.getAllCategories();
  res.status(200).json({
    title: 'Products',
    products,
    categories,
  })
}

getProductById = (req, res, next) => {
  console.log("Get product By Id");
  let _id = req.params._id;
  const product = Product.getProduct(_id);
  if (product) {
    res.status(200).json({
      title: 'Product Detail',
      product : {...product}
    })
  } else {
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

getCart = (req, res, next) => {
  console.log("Get product Cart");
  res.status(200).json({
    title: 'Cart',
  })
}

getOrders = (req, res, next) => {
  console.log("Get product Orders");
  res.status(200).json({
    title: 'Orders',
  })
}


module.exports = {
  getIndex,
  getProducts,
  getProductDetails,
  getCart,
  getOrders,
  getProductById
}