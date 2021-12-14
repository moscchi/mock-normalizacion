import { Request } from 'express';
import { MensajesModel } from '../models/mensajes.models';

const postMsg = async (mensaje: any) => {
  const msj = await MensajesModel.find().sort({id:-1}).limit(1);
  console.log(msj);
  let id = 0;
  if(msj.length !== 0){
    id = msj[0]['author']['id'];
  } else {
    id = 1;
  }
  
  const { nombre, apellido, edad, alias, avatar, text } = mensaje;
    const obj = {
      id: ++id,
      author: {
          id,
          nombre,
          apellido,
          edad,
          alias,
          avatar
      },
      text
    };
    MensajesModel.create(obj);
    return obj;
};
export {postMsg};