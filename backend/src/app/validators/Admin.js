import * as Yup from 'yup';

export const store = async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required('O nome é obrigatório'),
      email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
      password: Yup.string()
        .min(6, 'A senha deve ter no mínimo 6 caracteres')
        .required('A senha é obrigatória'),
    });

    await schema.validate(req.body, { abortEarly: true });

    return next();
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

export const update = async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
      oldPassword: Yup.string().min(
        6,
        'A senha antiga deve ter no mínimo 6 caracteres'
      ),
      password: Yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
    });

    await schema.validate(req.body, { abortEarly: true });

    return next();
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};
