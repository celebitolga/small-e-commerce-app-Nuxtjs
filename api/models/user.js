const getDb = require('../database').getDb;
const mongodb = require('mongodb');

class User {
  constructor(name, email, _id) {
    this.name = name;
    this.email = email;
    this._id = _id;
  }

  save() {
    const db = getDb();

    return db.collection('users')
      .insertOne(this);
  }

  static findById(userId) {
    const db = getDb();

    return db.collection('users')
      .findOne({ _id: new mongodb.ObjectID(userId) })
      .then((user) => {
        return user;
      })
      .catch((err) => {
        console.log(err);
      })
  }

  static findByUsername(username) {
    const db = getDb();

    return db.collection('users')
      .findOne({
        name: username
      })
      .then((user) => {
        return user;
      })
      .catch((err) => {
        console.log(err);
      })
  }
}


module.exports = User;