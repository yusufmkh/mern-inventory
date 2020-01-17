const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const productSchema = new Schema({
//   name: { type: String, required: true },
//   amount: { type: Number, required: true },
//   um: { type: String, required: true },
//   price: { type: Number, required: true },
//   weight: { type: Number, required: true },
//   description: { type: String, required: true }
// }, {
//   timestamps: true
// });

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;