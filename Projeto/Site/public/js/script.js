let photo = document.getElementById('imgFoto');
let file = document.getElementById('flImage');
photo.addEventListener('click', () => {
file.click();
});

file.addEventListener('change', () => {
    // Sem essa verificação, ele irá dar erro quando o usuário clicar em cancelar
    // pois enviará uma "imagem" vazia
    if (file.files.length == 0) {
    return;
    }
    // Inicializando a função que pega o caminho da imagem
    let reader = new FileReader();
    // Está pegando o caminho da imagem
    reader.readAsDataURL(file.files[0]);
    // Coloca o caminho da imagem no Source da tag IMG
    reader.onload = () => {
    photo.src = reader.result
    }
});

function americanas(id)
{
    let nome = document.getElementById(id+"Nome");
    let idade = document.getElementById(id+"Idade");
    let sexo = document.getElementById(id+"Sexo");
    let foto = document.getElementById(id+"ImgT");
    let idsala = document.getElementById(id+"IDSala");

    document.getElementById("formNome").value = nome.innerText
    document.getElementById("formIdade").value = idade.innerText
    document.getElementById("formFoto").src = 'img/' + foto.innerText;
    document.getElementById("formSexo").value = sexo.innerText
    document.getElementById("formIDSala").value = idsala.innerText
    document.getElementById("form_id").action = "/editarAluno/" + id
    document.getElementById("form_id_excluir").action = "/excluirAluno/" + id


    let fotos = document.getElementById("formFoto");
    let fileFoto = document.getElementById("filImage");

    fotos.addEventListener('click', () => {
        fileFoto.click();
    });

    fileFoto.addEventListener('change', () => {

        if (fileFoto.files.length == 0)
        {
            return
        }

        let reader = new FileReader();

        reader.readAsDataURL(fileFoto.files[0]);
        reader.onload = () => {
            fotos.src = reader.result
        }
    });
}