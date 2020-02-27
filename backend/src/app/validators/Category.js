import * as Yup from 'yup';

export const store = async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required('O nome é obrigatório'),
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
      name: Yup.string().required('O nome é obrigatório'),
    });

    await schema.validate(req.body, { abortEarly: true });

    return next();
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};
