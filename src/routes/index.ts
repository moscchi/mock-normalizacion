import express, {Request, Response} from 'express';
import {getProducts} from '../controllers/fakerController'
import path from 'path';
const routes = express.Router();

routes.get('/productos-test', getProducts);

export {routes};