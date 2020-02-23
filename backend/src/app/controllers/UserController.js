import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const { phone } = req.body;

      const userExists = await User.findOne({ phone });

      if (userExists) {
        return res.status(400).json({
          message: 'Usuário já cadastrado',
        });
      }

      const user = await User.create(req.body);

      return res.status(200).json(user);
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

      user.name = name;

      await user.save();

      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({
        message: 'Operação indisponível',
      });
    }
  }
}

export default new UserController();
