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

  async update(req, res) {
    try {
      const { email, oldPassword } = req.body;

      const admin = await Admin.findByPk(req.userId);

      if (email !== admin.email) {
        const adminExists = await Admin.findOne({ where: { email } });

        if (adminExists) {
          return res.status(400).json({
            message: 'Administrador já cadastrado',
          });
        }
      }

      if (oldPassword && !(await admin.checkPassword(oldPassword))) {
        return res.status(400).json({
          message: 'As senhas não coincidem',
        });
      }

      const { id, name } = await admin.update(req.body);

      return res.status(200).json({ id, name, email });
    } catch (err) {
      return res.status(400).json({
        message: 'Operação inválida',
      });
    }
  }
}

export default new AdminController();
