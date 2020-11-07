const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
	description: String,
  	distance: Number,
  	time_s: Number,
  	date: Date,
  	components: [{type: mongoose.Schema.Types.ObjectId, ref: 'Component'}]
});

const activityModel = mongoose.model('Activity', activitySchema);

module.exports.ActivitySchema = activitySchema;
module.exports.ActivityModel = activityModel;