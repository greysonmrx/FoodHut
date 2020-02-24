import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const { phone } = req.body;

      const userExists = await User.findOne({ where: { phone } });

      if (userExists) {
        return res.status(400).json({
          message: 'Usuário já cadastrado',
        });
      }

      const { id, name } = await User.create(req.body);

      return res.status(200).json({ id, name, phone });
    } catch (err) {
      return res.status(400).json({
        message: 'Operação indisponível',
      });
    }
  }

  async update(req, res) {
    try {
      const { name, phone } = req.body;

      const user = await User.findOne({ where: { phone } });

      if (!user) {
        return res.status(400).json({
          message: 'Usuário não existe',
        });
      }

      const { id } = await user.update({ name });

      return res.status(200).json({ id, name, phone });
    } catch (err) {
      return res.status(400).json({
        message: 'Operação indisponível',
      });
    }
  }

  async destroy(req, res) {
    try {
      const { phone } = req.body;

      const user = await User.findOne({ where: { phone } });

      await user.destroy();

      return res.status(200).json({});
    } catch (err) {
      return res.status(400).json({
        message: 'Operação indisponível',
      });
    }
  }
}

export default new UserController();
