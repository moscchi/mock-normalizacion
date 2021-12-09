import express from 'express';
import {getProducts} from '../controllers/fakerController'

const routes = express.Router();

routes.get('/productos-test', getProducts);

export {routes};