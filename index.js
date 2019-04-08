const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoutes = require('./routes/todo');
const config = require('./db/config');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3006;

app.use(cors({
   "origin": "*",
   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
   "preflightContinue": false,
   "optionsSuccessStatus": 204
}));

app.use(bodyParser.json());
app.use('/api/todo/', todoRoutes);

server.listen(port, () => {
   console.log(`Server listening on port ${port}`);
})