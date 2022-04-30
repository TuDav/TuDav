const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const billInfo = new Schema({
  custName: { type: String, default: 'hahaha' },
  custPhone: { type: String },
  calc_shipping_provinces: { type: String },
  calc_shipping_district: { type: String },
  productIds: { type: String },
  productQuantity: { type: String },
  custAddress: { type: String },
  custNote: { type: String },
  payAsign: { type: String },
  payBank: { type: String },
  totalPrice: { type: Number },
});


module.exports = mongoose.model('billInfo', billInfo);