const getDb = require('../database').getDb;
const mongodb = require('mongodb');

module.exports = class User {
  constructor(name, email, cart, _id) {
    this.name = name;
    this.email = email;
    this.cart = cart ? cart : {};
    this.cart.items = cart ? cart.items : [];
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
      .findOne({
        _id: new mongodb.ObjectID(userId)
      })
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

  getCart() {
    const ids = this.cart.items.map(i => i.productId);
    
    const db = getDb();

    return db.collection('products')
      .find({ _id: { $in: ids } })
      .toArray()
      .then((products) => {
        return products.map(p => {
          return {
            ...p,
            quantity: this.cart.items.find(i => i.productId.toString() === p._id.toString()).quantity
          }
        })
      })
  }

  addToCart(product) {
    const index = this.cart.items.findIndex(cp => cp.productId.toString() === product._id.toString())
    const updatedCartItems = [...this.cart.items];
    let itemQuantity = 1;

    if (index > -1) { // Cart'a zaten eklenmek istenen product var: quantity'i arttır
      itemQuantity = this.cart.items[index].quantity + 1;
      updatedCartItems[index].quantity = itemQuantity;
    } else {
      // updatedCartItems'a yeni bir elemen ekle
      updatedCartItems.push({
        productId: new mongodb.ObjectID(product._id),
        quantity: itemQuantity,
      })
    }

    const db = getDb();

    return db.collection('users')
      .updateOne({
        _id: new mongodb.ObjectID(this._id)
      }, {
        $set: {
          cart: {
            items: updatedCartItems,
          }
        }
      })
  }

  deleteCartItem(productId) {
    const cartItems = this.cart.items.filter(item => item.productId.toString() != productId.toString());

    const db = getDb();

    return db.collection('users')
      .updateOne({
        _id: new mongodb.ObjectID(this._id)
      }, {
          $set: {
          cart: { items: cartItems }
        }
      })
      .then((result) => {
        return result;
      })
      .catch(err => console.log(err))

  }
}
