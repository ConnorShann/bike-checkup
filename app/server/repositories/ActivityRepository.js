const Repository = require('./Repository');
const userRepository = require('./UserRepository');
const ActivityModel = require('../schemas/Activity').ActivityModel;

class ActivityRepository extends Repository {
  constructor(activityModel) {
    super(activityModel);
  }

  // update to use numberOfDays
  GetActivitiesForUserInRange(userId, date, numberOfDays) {
    var endDate = new Date();
    endDate.setDate(date.getDate() + numberOfDays);
    console.log(date);
    return this.documentModel
      .find({
        athlete_id: userId,
        date: {$gte: date, $lte: endDate},
      })
      .exec();
  }
}
const activityRepository = new ActivityRepository(ActivityModel);
module.exports = activityRepository;
