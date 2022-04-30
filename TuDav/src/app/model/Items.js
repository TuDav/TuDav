const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const item = new Schema({
  name: { type: String, default: 'hahaha' },
  price: { type: Number, index: 'true' },
  imgAddress: { type: String },
  type: { type: String },
  trueName: { type: String },
  shortDesc: {type: String},
  description: {type: String},
  specialCharac: {type: String},
  productDetails: {type: String},
  quanity: {type: Number}
});


module.exports = mongoose.model('item', item);