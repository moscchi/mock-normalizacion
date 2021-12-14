import {httpServer, io} from "./server/index";
import './db'

const PORT = 8080;

httpServer.listen(PORT, () => {
    console.log(`Server listening at the port ${PORT}`);
}).on('error', (err: Error) => console.log(err));