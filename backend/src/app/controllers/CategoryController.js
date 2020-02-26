import Category from '../models/Category';

class CategoryController {
  async store(req, res) {
    try {
      const categoryExists = await Category.findOne({
        where: { name: req.body.name },
      });

      if (categoryExists) {
        return res.status(400).json({
          message: 'Categoria já cadastrada',
        });
      }

      const { id, name } = await Category.create(req.body);

      return res.status(200).json({ id, name });
    } catch (err) {
      return res.status(400).json({
        message: 'Operação indisponível',
      });
    }
  }
}

export default new CategoryController();