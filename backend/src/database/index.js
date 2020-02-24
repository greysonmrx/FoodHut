import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

// Models
import User from '../app/models/User';
import Admin from '../app/models/Admin';
import Product from '../app/models/Product';

const models = [User, Admin, Product];

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

  truncate() {
    models.map(model => model.destroy({ truncate: true, force: true }));
  }
}

export default new Database();
