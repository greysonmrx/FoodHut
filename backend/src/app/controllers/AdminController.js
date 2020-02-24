import Admin from '../models/Admin';

class AdminController {
  async store(req, res) {
    try {
      const adminExists = await Admin.findOne({
        where: { email: req.body.email },
      });

      if (adminExists) {
        return res.status(400).json({
          message: 'Administrador já cadastrado',
        });
      }

      const { id, name, email } = await Admin.create(req.body);

      return res.status(200).json({ id, name, email });
    } catch (err) {
      return res.status(400).json({
        message: 'Operação indisponível',
      });
    }
  }
}

export default new AdminController();
