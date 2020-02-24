import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

// Models
import User from '../app/models/User';
import Admin from '../app/models/Admin';

const models = [User, Admin];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
