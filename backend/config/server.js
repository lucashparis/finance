const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const AllowCors = require('./cors')

// responsável por fazer a interpretação dos que venha a partir da submissão de um formulário 
server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());
server.use(AllowCors);



server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`);
});
// console.log('server', server);

module.exports = server;
