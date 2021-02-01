import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  imageUrl: String,
  date: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
})

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
/*
const getDb = require('../database').getDb;
const mongodb = require('mongodb')

module.exports = class Product {
  constructor(name, price, imageUrl, description, categories, _userId) {
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
    this.categories = categories;
    this._userId = _userId;
  }

  save() {
    const db = getDb();

    return db.collection('products')
      .insertOne(this)
      .then((result) => {
        //console.log(result);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  static findAll() {
    const db = getDb();
    
    return db.collection('products')
      .find({})
      // .project({ name: 1, price: 1, imageUrl: 1 })
      .project({ description: 0 })
      .toArray()
      .then((products) => {
        return products;
      })
      .catch((err) => {
        console.log(err);
      })
  }

  static findAllByCategoryId(_categoryId) {
    const db = getDb();

    return db.collection('products')
      .find({
        categories: _categoryId
      })
      .toArray()
      .then((products) => {
        return products;
      })
      .catch((err) => {
        console.log(err);
      })
  }


  static findById(_id) {
    const db = getDb();

    // return db.collection('products')
    //   .find({
    //     _id: new mongodb.ObjectID(_id)
    //   })
    //   .toArray()
    //   .then((product) => {
    //     return product[0];
    //   })
    //   .catch((err) => {
    //     return null;
    //   })
    return db.collection('products')
      .findOne({
        _id: new mongodb.ObjectID(_id)
      })
      .then((result) => {
        return result;
      })
  }

  static editProduct(product) {
    const db = getDb();

    return db.collection('products')
      .updateOne({
        _id: new mongodb.ObjectID(product._id)
      }, {
        $set: {
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
          description: product.description,
          categories: product.categories,
          _userId: product._userId,
        }
      }, false, true)
      .then((result) => {
        return result;
      })
  }

  static deleteProductById(_id) {
    const db = getDb();

    return db.collection('products')
      .deleteOne({ _id: new mongodb.ObjectID(_id) })
      .then(() => {
        return true;
      })
  }
}
*/