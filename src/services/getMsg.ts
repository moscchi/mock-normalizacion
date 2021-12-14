import { MensajesModel } from "../models/mensajes.models";

const getMsg = async () => {
    const msgs = await MensajesModel.find();
    return msgs;
}
export {getMsg};