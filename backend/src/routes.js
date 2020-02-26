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

const routes = Router();

// Routes
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);
routes.delete('/users', UserController.destroy);

routes.post('/sessions', SessionController.store);

routes.use(AuthMiddleware);

routes.post('/admins', AdminController.store);
routes.put('/admins', AdminController.update);

routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);

routes.post('/categories', CategoryController.store);

export default routes;
