function ok()
{
    var cpf = document.getElementById("cpf").value
    cpf = [...cpf];
    var ncpf = []
    cpf.forEach(c=>{
        if(!isNaN(parseInt(c)))
            ncpf.push(parseInt(c))
    })
    cpf = ncpf
    console.log(cpf)

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
    console.log(findDuplicates(cpf).length)
    if(findDuplicates(cpf).length != 10 && cpf.length==11)
        cpf[9]==n9 && cpf[10]==n10 ? document.getElementById("sla").innerHTML="Valido" : document.getElementById("sla").innerHTML="Invalido"
    else
        document.getElementById("sla").innerHTML="Invalido"
}

// 705.484.450-52