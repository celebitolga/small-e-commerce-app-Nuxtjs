import mongoose from 'mongoose';
const { Schema } = mongoose;

const categorySchema = Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.models.Category || mongoose.model('Category', categorySchema);




// const getDb = require('../database').getDb;
// const mongodb = require('mongodb')

// module.exports = class Category {
//   constructor(name, description) {
//     this.name = name;
//     this.description = description;
//   }

//   save() {
//     const db = getDb();

//     return db.collection('categories')
//       .insertOne(this)
//       .then((result) => console.log(result))
//       .catch(err => console.log(err))
//   }

//   static findAll() {
//     const db = getDb();

//     return db.collection('categories')
//       .find({})
//       .toArray()
//       .then(result => result)
//       .catch(err => console.log(err))
//   }

//   static findById(_id) {
//     const db = getDb();
//     return db.collection('categories')
//       .findOne({
//         _id: new mongodb.ObjectID(_id)
//       })
//       .then((result) => {
//         return result;
//       })
//   }

//   static editCategory(category) {
//     const db = getDb();

//     return db.collection('categories')
//       .updateOne({
//         _id: new mongodb.ObjectID(category._id)
//       }, {
//         $set: {
//           name: category.name,
//           description: category.description,
//         }
//       }, false, true)
//       .then((result) => {
//         return result;
//       })
//   }


//   static deleteCategoryById(_id) {
//     const db = getDb();

//     return db.collection('categories')
//       .deleteOne({
//         _id: new mongodb.ObjectID(_id)
//       })
//       .then(() => {
//         return true;
//       })
//   }
// }