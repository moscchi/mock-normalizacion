import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    id: {type: Number},
    author: {
        id: { type: String },
        nombre: { type: String},
        apellido: { type: String},
        edad: { type: Number},
        alias: { type: String},
        avatar: { type: String},
    },
    text: { type: String}
});

export const MensajesModel = mongoose.model('desafiomock-mensajes', Schema);