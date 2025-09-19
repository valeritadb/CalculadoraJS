let primerNumero = null; //guarda el numero antes de pulsar el operador
let operador = null; //guarda la operación que se quiere hacer
let esperandoSegundoNumero = false; //Saber si estamos esperando al segundo numero

/* Pinta el numero que pulsemos */
function numero(num){

    const pantalla = document.getElementById("pantalla"); //recibe el valor inicial de la pantalla

    if (pantalla.innerHTML === "0" || esperandoSegundoNumero){ //si la pantalla tiene un 0 se pinta el numero 
        pantalla.innerHTML = num; 
        esperandoSegundoNumero = false;

    } else { //y si ya hay numero le pinta otro detras
        pantalla.innerHTML += num; 
    }
}
 /* Función para manejar operadores */
 function operar(op){
    const pantalla = document.getElementById("pantalla");
    primerNumero = parseFloat(pantalla.innerHTML);
    operador = op;
    esperandoSegundoNumero = true;
 }

 /* Función para calcular el resultado */
 function calcular(){
    const pantalla = document.getElementById("pantalla");
    const segundoNumero = parseFloat(pantalla.innerHTML);
    let resultado = 0;

    switch (operador){
        case '+':
            resultado = primerNumero + segundoNumero;
            break;
        case '-':
            resultado = primerNumero - segundoNumero;
            break;
        case '*':
            resultado = primerNumero * segundoNumero;
            break;
        case '/':
            resultado = segundoNumero !== 0 ? primerNumero / segundoNumero : "Error";
            break;
        default:
            resultado = segundoNumero;
    }
    pantalla.innerHTML = resultado;
    primerNumero = null;
    operador = null;
    esperandoSegundoNumero = false;
 }


/* Borrar todo */
function borrar() {
    const pantalla = document.getElementById("pantalla");
    pantalla.innerHTML = "0";
    primerNumero = null;
    operador = null;
    esperandoSegundoNumero = false;
}

/* Borrar último */
function borrarUltimo() {
    const pantalla = document.getElementById("pantalla");
    let contenido = pantalla.innerHTML;

    if (contenido.length > 1) {
        pantalla.innerHTML = contenido.slice(0, -1);
    } else {
        pantalla.innerHTML = "0";
    }
}

// Manejo de teclado
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key) && key !== ' ') {
        numero(Number(key));
    }

    if (key === 'Escape' || key.toLowerCase() === 'c') {
        borrar();
    }

    if (key === 'Backspace') {
        borrarUltimo();
    }

    if (['+', '-', '*', '/'].includes(key)) {
        operar(key);
    }

    if (key === '=' || key === 'Enter') {
        calcular();
    }
});






