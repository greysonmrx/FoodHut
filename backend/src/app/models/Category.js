import Sequelize, { Model } from 'sequelize';

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Product, {
      through: 'categories_products',
      as: 'products',
      foreignKey: 'category_id',
    });
  }
}

export default Category;
