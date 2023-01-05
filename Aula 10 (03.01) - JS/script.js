function verifyCPF()
{
    var cpf = document.getElementById("cpf").value
    cpf = [...cpf];
    var ncpf = []
    cpf.forEach(c=>(!isNaN(parseInt(c))) ? ncpf.push(parseInt(c)) : null)
    cpf = ncpf

    var n9 = 0
    var n10 = 0

    for (let i = 0; i < 9; i++) {
        n9 = n9 + (cpf[i] * (10-i));
    }
    n9 = 11-(n9%11)
    for (let i = 0; i < 10; i++) {
        n10 = n10 + (cpf[i] * (11-i));
    }
    n10 = 11-(n10%11)
    
    n9 = (n9 > 9) ? 0 : n9
    n10 = (n10 > 9) ? 0 : n10

    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

    if(findDuplicates(cpf).length != 10 && cpf.length==11)
        cpf[9]==n9 && cpf[10]==n10 ? document.getElementById("sla").innerHTML="Valido" : document.getElementById("sla").innerHTML="Invalido"
    else
        document.getElementById("sla").innerHTML="Invalido"
    
    // var cpfc = cpf.replace(cpf[9],n9).replace(cpf[10],n10)
    var cpfc = cpf.splice(9,2,n9,n10)

    document.getElementById("sla").innerHTML=="Invalido"?document.getElementById("sla1").innerHTML = cpf.join("").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") : null
}

// 705.484.450-52
// Ctrl+d: seleciona varios // Ctrl+F: pesquisa

function generateCPF()
{
    var cpf = ''

    for (let i = 0; i < 9; i++) {
        cpf = cpf.concat(Math.floor(Math.random() * 10));
    }

    var cpfa = [...cpf];
    var ncpf = []
    cpfa.forEach(c=>(!isNaN(parseInt(c))) ? ncpf.push(parseInt(c)) : null)
    cpfa = ncpf

    var n9 = 0
    var n10 = 0

    for (let i = 0; i < 9; i++) {
        n9 = n9 + (cpfa[i] * (10-i));
    }
    n9 = 11-(n9%11)

    cpfa = cpfa.concat(n9)

    for (let i = 0; i < 10; i++) {
        n10 = n10 + (cpfa[i] * (11-i));
    }
    n10 = 11-(n10%11)
    
    cpfa = cpfa.concat(n10)

    n9 = (n9 > 9) ? 0 : n9
    n10 = (n10 > 9) ? 0 : n10

    cpf = cpf + n9 + n10
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")

    document.getElementById("sla2").innerHTML=cpf
}