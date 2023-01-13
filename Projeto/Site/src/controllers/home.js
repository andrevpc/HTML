const database = require("../config/db");
const sala = require("../model/sala");


module.exports = {
    async pagInicialGet(req, res){
        const salas = await sala.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ["IDSala", "Nome"],
          });
        res.render("../views/index", { salas });
    }
}