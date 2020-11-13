const mongoose = require('mongoose');
const {ComponentSchema} = require('./Component');

const bikeSchema = new mongoose.Schema({
  _id: String,
  owner: {type: mongoose.Schema.Types.Number, ref: 'User'}, // reference
  label: String,
  components: [ComponentSchema],
  distance: Number,
});
const bikeModel = mongoose.model('Bike', bikeSchema);

module.exports.BikeModel = bikeModel;
module.exports.BikeSchema = bikeSchema;
