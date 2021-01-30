import mongoose from 'mongoose';
const Product = require('../models/Product');
const Category = require('../models/Category');

// eq (equal)
// neq (not equal)
// gt (greater than)
// gte (greater than or equal)
// lt (less than)
// lte (less than or equal)
// in 
// nin (not in)

getIndex = async (req, res, next) => {
  console.log("Get product Index");
const products = await Product.find({name: /.*Samsung.*/})
                                // .find({price: { $eq: 2000 }})
                                // .find({price: { $neq: 2000 }}) /// 2000'e eşit olmayan kayıtlar
                                // .find({price: { $gt: 2000 }}) /// 2000'den büyük olan
                                // .find({price: { $gte: 2000 }}) /// 2000'e eşit ve büyük olan
                                // .find({price: { $lt: 2000 }}) /// 2000'den küçük olan
                                // .find({price: { $lte: 2000 }}) /// 2000'e eşit ve küçük olan
                                // .find({price: { $in: [1000,2000,3000] }}) /// 1000, 2000, 3000 olan ürünleri getireck
                                // .find({price: { $gte: 1000, $lte: 2000 }}) /// 1000 ve 2000 arasında olan ürünleri getirecek
                                // .find({price: { $gt: 2000 }, name: 'Samsung S6'}) /// fiyatı 2000'den büyük ve name'i Samsung S6'olan
                                // .find() /// Aşağıdaki sorguda olay
                                // .or([{ price: { $gt: 2000 }, name: 'Samsung S6' }])  // Ya birincisi doğru olacak, ya ikincisi (OR)
                                // .and() //Operatörüde var ama gerek yok 
                                
                                // İçeride kelime arama Örneğin Samsung arayacaksak
                                // starts with
                                // .find({name: /^Samsung/}) //Başına Samsung ile başlayacak ve sonuna bakmayacak
    
                                // ends with
                                // .find({name: /Samsung$/}) //Sonu Samsung ile bitecek ve başı önemli değil
    
                                // contains
                                // .find({name: /.*Samsung.*/})  //Sadece Samsung kelimesini arar, başına veya sonuna bakmaz
                                .then(products => products)

  // const products = await Product.find().then(products => products)
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
  getProductDetails,
  getProductById,
  getProductsByCategory,
  getOrders,
  getCart,
  postAddCart,
  deleteCartItem,
  postOrders,
}