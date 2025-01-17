//rotas da url index/...

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
const editar = require('./src/controllers/editar');
const excluir = require('./src/controllers/excluir')

// Iniciando as rotas
route.get('/', home.pagInicialGet);

route.get("/salas", cadastro.sala)
route.post('/salaInsert', cadastro.salaInsert);

//Editar alunos
route.post('/editarAluno/:id', multer(config).single('foto'), editar.adicionarAluno);
route.post('/excluirAluno/:id', excluir.alunoExcluir)
//Excluir salas
route.post('/excluirSala/:id', excluir.salaExcluir)
//Editar salas
route.get('/editarSala/:id', editar.salas);
route.post('/editarSala/:id', editar.adicionarSala);

// Cadastro de aluno irá receber um arquivo com o "name" do HTML chamado de "foto"
route.post('/cadastroAluno', multer(config).single('foto'), cadastro.alunoInsert);
route.post('/', home.pagInicialPost);
route.post('/alunoInsert/', cadastro.alunoInsert);
module.exports = route;