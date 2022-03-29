const http = require('http');
const app = require('./app');

const port = 8000;
const host = 'localhost';

const server = http.createServer(app);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
server.listen(port);