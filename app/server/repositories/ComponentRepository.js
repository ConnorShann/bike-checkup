const Repository = require('./Repository');
const ComponentModel = require('../schemas/Component').ComponentModel;

class ComponentRepository extends Repository {
  constructor(componentModel) {
    super(componentModel);
  }

  GetByBikeId(bikeId) {
    this.documentModel.find({bike: bikeId}).exec();
  }

  //Supporting function for front end
  GetTasksByComponentId(componentId) {
    var components = this.documentModel.find({_id: componentId}).exec();
    return components.maintenance_tasks;
  }
}
const componentRepository = new ComponentRepository(ComponentModel);
module.exports = componentRepository;
