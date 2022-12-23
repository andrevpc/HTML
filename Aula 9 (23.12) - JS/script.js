var display = document.getElementById("display");

document.addEventListener("click", event => {
    var element = event.target;
    if (element.classList.contains("btn-clear"))
        display.value = "";
    else if (element.classList.contains("btn-del"))
        display.value = display.value.slice(0, -1)
    else if (element.classList.contains("btn-eq"))
        display.value = eval(display.value);
    else
    {
        if(display.value.slice(-1) == "." && element.innerText == ".") 
            return
        display.value += element.innerText;
    }
})