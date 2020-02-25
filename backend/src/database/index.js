import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

// Models
import User from '../app/models/User';
import Admin from '../app/models/Admin';
import Product from '../app/models/Product';
import Category from '../app/models/Category';

const models = [User, Admin, Product, Category];

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

  truncate(model) {
    return model.destroy({ truncate: { cascade: true }, force: true });
  }
}

export default new Database();
