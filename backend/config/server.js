const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();

// responsável por fazer a interpretação dos que venha a partir da submissão de um formulário 
server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(bodyParser.json());

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`);
});

module.exports = server;
