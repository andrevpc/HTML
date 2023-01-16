const sala = require("../model/sala");
const aluno = require("../model/aluno");

module.exports = {
    async alunos(req, res){
        // Recebendo o id da URL
        const parametro = req.params.id;
        const alunos = await aluno.findByPk(parametro, {
        raw: true, //Retorna os somente os valores de uma tabela, sem os metadados
        attributes: ['IDAluno', 'Nome', 'Idade', 'Sexo', 'Foto', 'IDSala']
        });
        const salas = await sala.findAll({ raw: true, attributes: ['IDSala', 'Nome'] });
        res.render('../views/editarAluno', {salas, alunos});
        }
}

// async alunoInsert(req, res) {
//     // Recebendo as informações pelo Body
//     const dados = req.body;
//     console.log(dados);
//     // Nome padrão da foto
//     let foto = "usuario.png";
//     // Verificando se foi enviada alguma foto
//     if (req.file) {
//       // Pegar novo nome da foto
//       foto = req.file.filename;
//     }
//     // Criando aluno no banco de dados
//     await aluno.create({
//       Nome: dados.aname,
//       Idade: dados.idade,
//       Sexo: dados.sexo,
//       IDSala: dados.sala,
//       Foto: foto,
//     });
//     // Redirecionar para a página principal
//     res.redirect("/");
//   },