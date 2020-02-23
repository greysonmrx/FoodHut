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
}

export default new UserController();
