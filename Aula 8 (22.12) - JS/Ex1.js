// // Ex1 -- node Ex1.js
// var nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// var arr = [1, 2, 3, 4, 5]

// nums.splice(0, 3, ...arr)
// console.log(nums)
// // ...arr Spread
// //    =
// // 1, 2, 3, 4, 5
// nums = nums.filter(x=>x%3==0)
// console.log(nums)

// nums = nums.map(x => x**2)
// console.log(nums)

// const sla = nums.reduce((soma, x) => soma + x, -200)
// console.log(sla)

// Ex2
function el10()
{
    var ele = document.getElementById("sla")
    var value = Number(ele.value)
    check(value)
    Prints()
}

function check(val)
{
    if (val%2==0)
    {
        arrp.push(val)
        if(val%(arrp.length-1) == 0)
            arrdi.push(val)
    }
    else
    {
        arri.push(val)
        if(val%(arri.length-1) == 0)
            arrdi.push(val)
    }
}

function Prints()
{
    console.log(`Imapres: ${arri}`)
    console.log(`Pares ${arrp}`)
    console.log(`Divisiveis ${arrdi}`)
}

var arri = []
var arrp = []
var arrdi = []