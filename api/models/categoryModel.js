const getDb = require('../database').getDb;
const mongodb = require('mongodb')

module.exports = class Category {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  save() {
    const db = getDb();

    return db.collection('categories')
      .insertOne(this)
      .then((result) => console.log(result))
      .catch(err => console.log(err))
  }

  static findAll() {
    const db = getDb();

    return db.collection('categories')
      .find({})
      .toArray()
      .then(result => result)
      .catch(err => console.log(err))
  }
}