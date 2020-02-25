import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
        cost: Sequelize.FLOAT,
        price: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Category, {
      through: 'categories_products',
      as: 'categories',
      foreignKey: 'product_id',
    });
  }
}

export default Product;
