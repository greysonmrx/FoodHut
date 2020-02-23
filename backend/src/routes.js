import { Router } from 'express';

// Controllers
import UserController from './app/controllers/UserController';

// Middlewares

// Validators

const routes = Router();

// Routes
routes.post('/users', UserController.store);

export default routes;
