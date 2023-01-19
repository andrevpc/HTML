const sequelize = require('sequelize'); // ele faz todo o CRUD
//configurações da base de dados
const database = new sequelize('Controle_André', 'disrct_Andre', 'etsds10243110',
{
dialect: 'mssql', host:'localhost', port: 1433
});
database.sync(); //conectando com o banco
module.exports = database;