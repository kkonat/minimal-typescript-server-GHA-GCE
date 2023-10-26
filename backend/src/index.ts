import express = require('express');

const port = Number(process.env.PORT) || 8080;

const app = express();
app.enable('trust proxy');

console.log('Starting server on port ' + port);
const server = app.use('/', (req, res, next) => {
    res.status(200).send('Sample typescript express server app');
}).listen(port);
