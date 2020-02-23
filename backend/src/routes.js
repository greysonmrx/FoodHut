import { Router } from 'express';

// Controllers

// Middlewares

// Validators

const routes = Router();

// Routes

routes.get('/welcome', (req, res) => {
  res.send({
    message: 'Hello World!',
  });
});

export default routes;
