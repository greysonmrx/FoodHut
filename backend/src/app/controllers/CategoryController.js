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

  async update(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);

      const categoryExists = await Category.findOne({
        where: { name: req.body.name },
      });

      if (categoryExists && categoryExists.id != req.params.id) {
        return res.status(400).json({
          message: 'Categoria já cadastrada',
        });
      }

      const { id, name } = await category.update(req.body);

      return res.status(200).json({ id, name });
    } catch (err) {
      return res.status(400).json({
        message: 'Operação indisponível',
      });
    }
  }

  async destroy(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);

      if (!category) {
        return res.status(400).json({
          message: 'Categoria não encontrada',
        });
      }

      await category.destroy();

      return res.status(200).json({});
    } catch (err) {
      return res.status(400).json({
        message: 'Operação inválida',
      });
    }
  }
}

export default new CategoryController();
