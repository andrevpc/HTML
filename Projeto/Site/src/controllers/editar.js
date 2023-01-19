const sala = require("../model/sala");
const aluno = require("../model/aluno");
// Importando FS
const fs = require('fs');

module.exports = {

  async adicionarAluno(req, res) { //update
    const dados = req.body;
    const id = req.params.id;
    console.log(dados)
    // Se foi enviado alguma foto
    if (req.file) {
      // Recebendo a antiga foto do aluno
      const antigaFoto = await aluno.findAll({
        raw: true,
        attributes: ["Foto"],
        where: { IDAluno: id },
      });
      // Excluindo a foto da pasta
      if (antigaFoto[0].Foto != "usuario.png")
        fs.unlink(
          `public/img/$
                {antigaFoto[0].Foto}`,
          (err) => {
            if (err) console.log(err);
          }
        );
      // Update da nova foto no DB
      await aluno.update(
        { Foto: req.file.filename },
        { where: { IDAluno: id } }
      );
    }

    // Dando upgrade nas novas informações
    await aluno.update(
      {
        Nome: dados.nome,
        Idade: dados.idade,
        Sexo: dados.sexo,
        IDSala: dados.sala,
      },
      {
        where: { IDAluno: id },
      }
    );
    res.redirect("/");
  },


  async salas(req, res) {
    // Recebendo o id da URL
    const parametro = req.params.id;
    const salas = await sala.findByPk(parametro, {
      raw: true,
      attributes: ["IDSala", "Nome", "Capacidade"],
    });
    res.render("../views/editarSala", { salas });
  },

  async adicionarSala(req, res) {
    const dados = req.body;
    const id = req.params.id;

    console.log(dados)

    // Dando upgrade nas novas informações
    await sala.update(
      {
        Nome: dados.nome,
        Capacidade: dados.capacidade
      },
      {
        where: { IDSala: id },
      }
    );
    res.redirect("/");
  },
};