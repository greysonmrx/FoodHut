import Product from '../models/Product';

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
}

export default new ProductController();
