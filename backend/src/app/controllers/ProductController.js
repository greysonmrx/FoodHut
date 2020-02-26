import Product from '../models/Product';
import Category from '../models/Category';

class ProductController {
  async store(req, res) {
    try {
      const productExists = await Product.findOne({
        where: { name: req.body.name },
      });

      if (productExists) {
        return res.status(400).json({
          message: 'Produto já cadastrado',
        });
      }

      const product = await Product.create(req.body);

      product.setCategories(req.body.categories);

      const { id, name, description, cost, price } = product;

      return res.status(200).json({ id, name, description, cost, price });
    } catch (err) {
      return res.status(400).json({
        message: 'Operação indisponível',
      });
    }
  }

  async update(req, res) {
    try {
      const product = await Product.findByPk(req.params.id, {
        include: [
          {
            model: Category,
            as: 'categories',
            attributes: ['id', 'name'],
            through: { attributes: [] },
          },
        ],
      });

      const productExists = await Product.findOne({
        where: { name: req.body.name },
      });

      if (productExists && productExists.id === req.params.id) {
        return res.status(400).json({
          message: 'Produto já cadastrado',
        });
      }

      const {
        id,
        name,
        description,
        cost,
        price,
        categories,
      } = await product.update(req.body);

      product.setCategories(req.body.categories);

      return res
        .status(200)
        .json({ id, name, description, cost, price, categories });
    } catch (err) {
      return res.status(400).json({
        message: 'Operação inválida',
        err,
      });
    }
  }
}

export default new ProductController();
