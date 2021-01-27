const Product = require('../models/product');

getProducts = (req, res, next) => {
  console.log("Admin get products");
  const products = Product.getAll();
  res.status(200).json({
    title: 'Admin Products',
    products,
  })
}

getAdminProduct = (req, res, next) => {
  console.log("Get Admin product By Id");
  let _id = req.params._id;
  const product = Product.getProduct(_id);
  if (product) {
    res.status(200).json({
      title: 'Product Detail',
      product: {
        ...product
      }
    })
  } else {
    console.log('BAD Request');
    res.status(200).json({
      err: "Not Found",
    })
  }
}

addProduct = (req, res, next) => {
  console.log("Admin new product");
  const product = new Product(
    req.body.product.name,
    req.body.product.price,
    req.body.product.imageUrl,
    req.body.product.description
  );

  product.saveProduct();

  res.status(200).json({
    message: "Registration Successful",
  })
}

editProduct = (req, res, next) => {
  console.log("Admin edit product");
  res.status(200).json({
    title: 'Edit Product',
  })
}

module.exports = {
  getProducts,
  getAdminProduct,
  addProduct,
  editProduct,
}