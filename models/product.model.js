const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  um: { type: String, required: true },
  price: { type: Number, required: true },
  weight: { type: Number, required: true },
  description: { type: String, required: true },
  userId: { type: String, required: true }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product