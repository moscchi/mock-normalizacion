import express, {Request, Response} from 'express';
import morgan from 'morgan';
import cors from "cors";
import {routes} from "../routes/index";
import {routeError} from '../utils/errores'

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.get('/', (req: Request, res: Response) => res.send('MockServer up!'));
server.use("/api", routes);
server.use(routeError);


export default server;