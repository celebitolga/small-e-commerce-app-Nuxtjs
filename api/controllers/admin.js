const Product = require('../models/product');
const Category = require('../models/category');


getProducts = (req, res, next) => {
  console.log("Admin get products");
  // Product.findAll()
  Product.find()
    .populate('userId', 'name -_id')
    .select('name price userId')
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
    description: req.body.product.description,
    imageUrl: req.body.product.imageUrl,
    categories: req.body.product.categories,
    userId: req.user,
    // userId: req.user._id,
  });
  product.save()
    .then((result) => {
      res.status(200).json({
        message: "Product Registration Successful",
        product: result,
      })
    })
}

addCategory = (req, res, next) => {
  console.log("Admin new category");
  const category = new Category({
    name: req.body.category.name,
    description: req.body.category.description,
  });

  category.save()
    .then((result) => {
      res.status(200).json({
        message: "Category Registration Successful",
        category: result,
      })
    })
}

postEditProduct = (req, res, next) => {
  console.log("Admin edit product");
  if (req.body.product) {
    try {
      //Query if has product, it will update product
      // const product = {
      //   _id: req.body.product._id,
      //   name: req.body.product.name,
      //   price: req.body.product.price,
      //   imageUrl: req.body.product.imageUrl,
      //   description: req.body.product.description,
      //   categories: req.body.product.categories,
      //   _userId: req.user._id,
      // }

      // query first
      // update first

      // const _id = req.body.product._id;
      // Product.findById(_id)
      //   .then((product) => {
      //     product.name = req.body.product.name;
      //     product.price = req.body.product.price;
      //     product.imageUrl = req.body.product.imageUrl;
      //     product.description = req.body.product.description;

      //     return product.save();
      //   })
      const _id = req.body.product._id;
      Product.updateOne({ _id }, {
          $set: {
            name: req.body.product.name,
            price: req.body.product.price,
            imageUrl: req.body.product.imageUrl,
            description: req.body.product.description,
            categories: req.body.product.categories,
          }
        })
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
      Category.updateOne({_id: category._id}, { name: category.name, description: category.description })
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
      Product.deleteOne({
          _id: req.body._id
        })
        // Product.findByIdAndRemove(req.body._id)
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

postDeleteCategory = async (req, res, next) => {
  console.log("Admin delete category");

  if (req.body._id) {
    try {
      //Query if has product, it will delete product
      const result = await Category.deleteOne({_id: req.body._id})
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
