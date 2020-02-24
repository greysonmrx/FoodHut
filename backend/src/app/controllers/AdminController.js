import Admin from '../models/Admin';

class AdminController {
  async store(req, res) {
    try {
      const { name, email, password_hash } = req.body;

      const adminExists = await Admin.findOne({ where: { email } });

      if (adminExists) {
        return res.status(400).json({
          message: 'Administrador já cadastrado',
        });
      }

      const admin = await Admin.create({ name, email, password_hash });

      admin.password_hash = undefined;

      return res.status(200).json(admin);
    } catch (err) {
      return res.status(400).json({
        message: 'Operação indisponível',
      });
    }
  }
}

export default new AdminController();
