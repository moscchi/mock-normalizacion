import express, {Request, Response} from 'express';
import path from 'path';
import morgan from 'morgan';
import cors from "cors";
import {routes} from "../routes/index";
import {routeError} from '../utils/errores'
import { Server as HttpServer } from 'http';
import { Server as IOServer, Socket } from 'socket.io';
import {getMsg} from '../services/getMsg';
import { postMsg } from "../services/postMsg";

const server = express();
const httpServer = new HttpServer(server);
const io = new IOServer(httpServer)
/* interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
  }
  
  interface ClientToServerEvents {
    hello: () => void;
  }
  
  interface InterServerEvents {
    ping: () => void;
  }
  
  interface SocketData {
    name: string;
    age: number;
  }

  const io = new IOServer<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(); */
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/", routes);
server.use(express.static(path.join(__dirname,'../public'))); 
server.use(routeError);

console.log(__dirname,'..','/public');

let msjs: string | number | any[] | Promise<any> = [];

io.on('connection', async (socket: Socket) => {
    console.log('Usuario conectado.', socket.id);
    msjs = await getMsg();
    console.log(msjs);
    
    //@ts-ignore
    socket.emit('server:newmessage', msjs);
    //@ts-ignore
    socket.on('client:mensaje', async (data) => {
        const msje = {
            author: {
                id: data.author.id,
                nombre: data.author.nombre,
                apellido: data.author.apellido,
                edad: data.author.edad,
                alias: data.author.alias,
                avatar: data.author.avatar
            },
            text: data.text
        };
        console.log(msje);
        await postMsg(msje);
        msjs = await getMsg();
        //@ts-ignore
        io.emit('server:newmessage', msjs);
    })
})


export {httpServer, io};