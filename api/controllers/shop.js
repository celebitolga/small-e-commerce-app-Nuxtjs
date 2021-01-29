const ProductModel = require('../models/productModel');
const CategoryModel = require('../models/categoryModel');


 getIndex = async (req, res, next) => {
  console.log("Get product Index");
  const products = await ProductModel.findAll().then(products => products)
  const categories = await CategoryModel.findAll().then(categories => categories)
  
  res.status(200).json({
    title: 'Shopping',
    products,
    categories,
  })
}

getProducts = async (req, res, next) => {
  console.log("Get product All");
  const products = await ProductModel.findAll().then(products => products)
  const categories = await CategoryModel.findAll().then(categories => categories)

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
    ProductModel.findById(_id)
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
  
  // const product = Product.getProduct(_id);
  // if (product) {
  //   res.status(200).json({
  //     title: 'Product Detail',
  //     product : {...product}
  //   })
  // } else {
  //   console.log('BAD Request');
  //   res.status(200).json({
  //     err: "Not Found",
  //   })
  // }
}

getProductsByCategory = async (req, res, next) => {
  console.log("Get products By Category");
  let _categoryId = req.params._categoryId;
  const categories = await CategoryModel.findAll().then(categories => categories)
  try {
    ProductModel.findAllByCategoryId(_categoryId)
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
  getProductById,
  getProductsByCategory,
}