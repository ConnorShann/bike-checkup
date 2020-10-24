const mongoose = require('mongoose');

const componentActivitySchema = new mongoose.Schema({
  component_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Component'
  },
  activity_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Activity'
  }
});
const ComponentActivity = mongoose.model('ComponentActivity', componentActivitySchema);