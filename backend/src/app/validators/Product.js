import * as Yup from 'yup';

export const store = async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required('O nome é obrigatório'),
      description: Yup.string().required('A descrição é obrigatória'),
      cost: Yup.number()
        .positive('O custo precisa ser um número positivo')
        .round('floor'),
      price: Yup.number()
        .positive('O preço precisa ser um número positivo')
        .round('floor'),
      categories: Yup.array()
        .min(1, 'O produto precisa ter pelo menos uma categoria')
        .required('A categoria é obrigatória'),
    });

    await schema.validate(req.body, { abortEarly: true });

    return next();
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};
