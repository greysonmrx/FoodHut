import jwt from 'jsonwebtoken';

import Admin from '../models/Admin';

class SessionController {
  async store(req, res) {
    try {
      const { email, password } = req.body;

      const admin = await Admin.findOne({ where: { email } });

      if (!admin) {
        return res.status(401).json({
          message: 'Administrador não encontrado',
        });
      }

      if (!(await admin.checkPassword(password))) {
        return res.status(401).json({
          message: 'Senha incorreta',
        });
      }

      const { id, name } = admin;

      return res.status(200).json({
        user: { id, name, email },
        token: jwt.sign({ id }, process.env.APP_SECRET, {
          expiresIn: process.env.EXPIRES_IN,
        }),
      });
    } catch (err) {
      return res.status(400).json({
        message: 'Operação indisponível',
      });
    }
  }
}

export default new SessionController();
