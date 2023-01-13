const cadastro = require("./src/controllers/cadastro")
// Iniciando Route do Express
const express = require('express');
const route = express.Router();
// Importando os Controllers
const home = require('./src/controllers/home');
// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.get("/salas", cadastro.sala)
route.post('/salaInsert', cadastro.salaInsert);
route.get("/alunos", cadastro.aluno)
route.post('/alunoInsert/', cadastro.alunoInsert);
module.exports = route;