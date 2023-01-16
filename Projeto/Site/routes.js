const cadastro = require("./src/controllers/cadastro")
// Iniciando Route do Express
const express = require('express');
const route = express.Router();
// Importando os Controllers
const home = require('./src/controllers/home');

// Iniciando Multer
const multer = require("multer");
// Recebendo arquivo do multer que criamos
const config = require('./src/config/multer');
const editar = require('./src/controllers/editar')

// Iniciando as rotas
route.get('/', home.pagInicialGet);

route.get("/salas", cadastro.sala)
route.post('/salaInsert', cadastro.salaInsert);


route.get("/alunos", cadastro.aluno)
route.get('/editarAluno/:id', editar.alunos);


// Cadastro de aluno irá receber um arquivo com o "name" do HTML chamado de "foto"
route.post('/cadastroAluno', multer(config).single('foto'), cadastro.alunoInsert);
route.post('/', home.pagInicialPost);
route.post('/alunoInsert/', cadastro.alunoInsert);
module.exports = route;