//Setando o meu servidor

const database = require('./src/config/db') //banco
const express = require('express');//biblioteca que faz varias coisas como liberar o sequelize (sequelize faz o CRUD)
const routes = require('./routes');//definindo as rotas
const app = express();
app.use(express.urlencoded({ extended: true })); //usando a query na url
// Static files
app.use(express.static('public')); //public é a pasta inicial
// EJS
app.set('views', './src/views'); //html no views
app.set('view engine', 'ejs'); //usamos ejs ao inves de html
app.use(routes);
app.listen(3000, () => console.log('Acesse: http://localhost:3000/')); //3000 seria a porta do servidor