const mongoose = require('mongoose');
const {MaintenanceTaskSchema} = require('./MaintenanceTask');
const {MaintenanceRecordSchema} = require('./MaintenanceRecord');
const {ActivitySchema} = require('./Activity');

const componentSchema = new mongoose.Schema({
  bike_id: {type: mongoose.Schema.Types.String, ref: 'Bike'}, //reference to Bike
  label: String,
  attachment_date: Date,
  removal_date: Date,
});
const componentModel = mongoose.model('Component', componentSchema);

module.exports.ComponentModel = componentModel;
module.exports.ComponentSchema = componentSchema;
