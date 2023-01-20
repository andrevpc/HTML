const sala = require("../model/sala");
const aluno = require("../model/aluno");
// Importando FS
const fs = require("fs");

module.exports = {
  async salaExcluir(req, res) {
    const parametro = req.params.id;
    const id = req.params.id;
    
    await aluno.destroy({
      where: {IDSala: id}
    })
    
    await sala.destroy({
      where: { IDSala: id },
    });
    res.redirect("/");
  },

  async alunoExcluir(req, res) {
    const parametro = req.params.id;
    const id = req.params.id;

    await aluno.destroy({
        where: {IDAluno: id}
    })
    res.redirect("/");
  },
};
