const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Hello World');
})

routes.get('/login', (req, res) => {
    res.send('Login efetuado com sucesso!')
})

routes.get('/cadastro', (req, res) => {
    res.send('cadastro feito com sucesso')
})

module.exports = routes;