// Importando as tabelas do DB
const sala = require("../model/sala");
const aluno = require("../model/aluno");

module.exports = {
  async sala(req, res) {
    res.render("../views/index"); //nao precisa de nenhum dado
  },
  async salaInsert(req, res) { //create
    // Recebe as informações do front-end
    const dados = req.body;
    console.log(dados);
    // Criando sala no banco de dados
    await sala.create({
      Nome: dados.sname,
      Capacidade: dados.capacidade,
    });
    // Redirecionar para a página principal
    res.redirect("/");
  },
  async aluno(req, res) { //read
    // Encontrando todas as salas disponíveis no SQL
    const salas = await sala.findAll({
      raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
      attributes: ["IDSala", "Nome"],
    });
    // Renderizando e passando o nome das salas para o front
    res.render("../views/index", { salas });
  },
  async alunoInsert(req, res) {
    // Recebendo as informações pelo Body
    const dados = req.body;
    console.log(dados);
    // Nome padrão da foto
    let foto = "usuario.png";
    // Verificando se foi enviada alguma foto
    if (req.file) {
      // Pegar novo nome da foto
      foto = req.file.filename;
    }
    // Criando aluno no banco de dados
    await aluno.create({
      Nome: dados.aname,
      Idade: dados.idade,
      Sexo: dados.sexo,
      IDSala: dados.sala,
      Foto: foto,
    });
    // Redirecionar para a página principal
    res.redirect("/");
  },
};
