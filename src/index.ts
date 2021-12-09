import server from "./server/index";

const PORT = 8080;

server.listen(PORT, () => {
    console.log(`Server listening at the port ${PORT}`);
}).on('error', (err: Error) => console.log(err));