import { Router } from 'express';

// Controllers
import UserController from './app/controllers/UserController';
import AdminController from './app/controllers/AdminController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import CategoryController from './app/controllers/CategoryController';

// Middlewares
import AuthMiddleware from './app/middlewares/AuthMiddleware';

// Validators
import * as UserValidator from './app/validators/User';
import * as ProductValidator from './app/validators/Product';

const routes = Router();

// Routes
routes.post('/users', UserValidator.store, UserController.store);
routes.put('/users', UserValidator.update, UserController.update);
routes.delete('/users', UserController.destroy);

routes.post('/sessions', SessionController.store);

routes.use(AuthMiddleware);

routes.post('/admins', AdminController.store);
routes.put('/admins', AdminController.update);

routes.post('/products', ProductValidator.store, ProductController.store);
routes.put('/products/:id', ProductController.update);

routes.post('/categories', CategoryController.store);
routes.put('/categories/:id', CategoryController.update);
routes.delete('/categories/:id', CategoryController.destroy);

export default routes;
