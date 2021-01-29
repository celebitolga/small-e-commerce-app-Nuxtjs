const ProductModel = require('../models/productModel');


getProducts = (req, res, next) => {
  console.log("Admin getaa products");
  ProductModel.findAll()
    .then((products) => {
      res.status(200).json({
        title: 'Admin Products',
        products,
      })
    })
}


getAdminProduct = (req, res, next) => {
  console.log("Get Admin product By Id");
  let _id = req.params._id;
  try {
    ProductModel.findById(_id)
      .then((product) => {
        if (product != null) {
          res.status(200).json({
            title: 'Product Edited',
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


addProduct = (req, res, next) => {
  console.log("Admin new product");
  const product = new ProductModel(
    req.body.product.name,
    req.body.product.price,
    req.body.product.imageUrl,
    req.body.product.description,
    req.body.product._categoryId,
    req.user._id,
  );

  product.save()
    .then(() => {
      res.status(200).json({
        message: "Registration Successful",
        product,
      })
    })
}



postEditProduct = (req, res, next) => {
  console.log("Admin edit product");
  if (req.body.product) {
    console.log();
    try {
      //Query if has product, it will update product
      const product = {
        _id: req.body.product._id,
        name: req.body.product.name,
        price: req.body.product.price,
        imageUrl: req.body.product.imageUrl,
        description: req.body.product.description,
        _categoryId: req.body.product._categoryId,
        _userId: req.user._id,
      }
      ProductModel.editProduct(product)
        .then((result) => {
          if (result != null) {
            res.status(200).json({
              message: "Edit Successful",
            })
          } else {
            /// Fail...
            console.log('BAD Request');
            res.status(200).json({
              err: "Not Found",
            })
          }
        })
    } catch (error) {
      /// Fail...
      console.log('BAD Request');
      res.status(200).json({
        err: "Not Found",
      })
    }
  } else {
    /// Fail...
    console.log('BAD Request');
    res.status(200).json({
      err: "Not Found",
    })
  }
}



postDeleteProduct = (req, res, next) => {
  console.log("Admin delete product");

  if (req.body._id) {
    try {
      //Query if has product, it will delete product
      ProductModel.deleteProductById(req.body._id)
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
    } catch (error) {
      /// Fail...
      console.log('BAD Delete Request');
      res.status(200).json({
        err: "Not Found",
      })
    }
  } else {
    /// Fail...
    console.log('BAD Delete Request');
    res.status(200).json({
      err: "Not Found",
    })
  }
}

module.exports = {
  getProducts,
  getAdminProduct,
  addProduct,
  postEditProduct,
  postDeleteProduct,
}