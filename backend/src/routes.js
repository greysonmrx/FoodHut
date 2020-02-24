import { Router } from 'express';

// Controllers
import UserController from './app/controllers/UserController';
import AdminController from './app/controllers/AdminController';

// Middlewares

// Validators

const routes = Router();

// Routes
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);
routes.delete('/users', UserController.destroy);

routes.post('/admins', AdminController.store);

export default routes;
