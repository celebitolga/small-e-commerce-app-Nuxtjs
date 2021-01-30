const Product = require('../models/product');
const Category = require('../models/category');


getProducts = (req, res, next) => {
  console.log("Admin get products");
  // Product.findAll()
  Product.find()
    // .limit(10)
    // .sort({ name: 1 }) // -1 tersi
    // .select({ name: 1, price: 1 })
    .then((products) => {
      res.status(200).json({
        title: 'Admin Products',
        products,
      })
    })
}

getCategories = (req, res, next) => {
  console.log("Admin get categories");
  Category.find()
    .then((categories) => {
      res.status(200).json({
        title: 'Admin Categories',
        categories,
      })
    })
}

getAdminProduct = (req, res, next) => {
  console.log("Get Admin product By Id");
  let _id = req.params._id;
  try {
    Product.findById(_id)
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

getAdminCategory = (req, res, next) => {
  console.log("Get Admin category By Id");
  let _id = req.params._id;
  try {
    Category.findById(_id)
      .then((category) => {
        if (category != null) {
          res.status(200).json({
            title: 'Product Edited',
            category,
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

  /*const product = new Product(
    req.body.product.name,
    req.body.product.price,
    req.body.product.imageUrl,
    req.body.product.description,
    req.body.product.categories,
    req.user._id,
  );*/

  const product = new Product({
    name: req.body.product.name,
    price: req.body.product.price,
    imageUrl: req.body.product.imageUrl,
    description: req.body.product.description
  });

  product.save()
    .then(() => {
      res.status(200).json({
        message: "Product Registration Successful",
        product,
      })
    })
}

addCategory = (req, res, next) => {
  console.log("Admin new category");
  const category = new Category(
    req.body.category.name,
    req.body.category.description,
  );

  category.save()
    .then((result) => {
      res.status(200).json({
        message: "Category Registration Successful",
        category,
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
        categories: req.body.product.categories,
        _userId: req.user._id,
      }
      Product.editProduct(product)
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

postEditCategory = (req, res, next) => {
  console.log("Admin edit category");
  if (req.body.category) {
    try {
      //Query if has product, it will update product
      const category = {
        _id: req.body.category._id,
        name: req.body.category.name,
        description: req.body.category.description,
      }
      Category.editCategory(category)
        .then((result) => {
          if (result != null) {
            res.status(200).json({
              message: "Category Edit Successful",
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
      Product.deleteProductById(req.body._id)
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

postDeleteCategory = (req, res, next) => {
  console.log("Admin delete category");

  if (req.body._id) {
    try {
      //Query if has product, it will delete product
      Category.deleteCategoryById(req.body._id)
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
  getCategories,
  getAdminProduct,
  getAdminCategory,
  addProduct,
  addCategory,
  postEditProduct,
  postEditCategory,
  postDeleteProduct,
  postDeleteCategory,
}
