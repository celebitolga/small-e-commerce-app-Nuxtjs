const getDb = require('../database').getDb;
const mongodb = require('mongodb')

module.exports = class ProductModel {
  constructor(name, price, imageUrl, description , _categoryId) {
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
    this._categoryId = _categoryId;
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
}