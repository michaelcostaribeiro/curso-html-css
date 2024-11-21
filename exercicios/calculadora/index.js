
const display = document.getElementById("display");

function appendToDisplay(entrada) {
    display.value += entrada;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value ="Deu ruim aqui primo.";
    }
}