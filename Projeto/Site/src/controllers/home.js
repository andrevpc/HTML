const database = require("../config/db");
const sala = require("../model/sala");
const aluno = require("../model/aluno");

//post manda para o banco de dados e get pega do banco

module.exports = {
  async pagInicialGet(req, res) {
    const salas = await sala.findAll({
      raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
      attributes: ["IDSala", "Nome"],
    });
    
    const alunos = await aluno.findAll({
      raw: true,
      attributes: ["IDAluno", "Nome", "Idade", "Foto", "Sexo", "IDSala"],
    });

    const salaPreenchida = []
    for (s of salas){
      var alunosSala = await aluno.count({
        raw: true,
        where: {IDSala : s.IDSala}
      })
      s.Capacidade <= alunosSala ? salaPreenchida.push("disabled") : salaPreenchida.push("")
    }

    res.render("../views/index", { salas, alunos: alunos, id: '', salaescolhida: '', salaPreenchida: salaPreenchida});
  },

  async pagInicialPost(req, res) {
    const id = req.body.nome;

    const salas = await sala.findAll({
      raw: true,
      attributes: ["IDSala", "Nome", "Capacidade"],
    });

    if (id == "cancel") {
      const alunos = await aluno.findAll({
        raw: true,
        attributes: ["IDAluno", "Nome", "Idade", "Foto", "Sexo", "IDSala"],
      });
  
      const salaPreenchida = []
    for (s of salas){
      var alunosSala = await aluno.count({
        raw: true,
        where: {IDSala : s.IDSala}
      })
      s.Capacidade <= alunosSala ? salaPreenchida.push("disabled") : salaPreenchida.push("")
    }
    
      res.render("../views/index", { salas, alunos: alunos, id: id, salaescolhida: '', salaPreenchida: salaPreenchida});
      return
    }

    const salaescolhida = await sala.findByPk(id,{
      raw: true,
      attributes: ["IDSala", "Nome", "Capacidade"]
    })

    const alunos = await aluno.findAll({
      raw: true,
      attributes: ["IDAluno", "Nome", "Idade", "Foto", "Sexo", "IDSala"],
      where: { IDSala: id },
    });

    const salaPreenchida = []
    for (s of salas){
      var alunosSala = await aluno.count({
        raw: true,
        where: {IDSala : s.IDSala}
      })
      s.Capacidade <= alunosSala ? salaPreenchida.push("disabled") : salaPreenchida.push("")
    }

    res.render("../views/index", { salas, alunos: alunos, id: id , salaescolhida: salaescolhida, salaPreenchida: salaPreenchida});
  },
};
