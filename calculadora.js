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

/* Permitir Decimales */
function agregarDecimal(){
    const pantalla = document.getElementById("pantalla");
    if (esperandoSegundoNumero){
        pantalla.innerHTML = "0.";
        esperandoSegundoNumero = false;
        return;
    } 
    
    if (!pantalla.innerHTML.includes(".")){
        pantalla.innerHTML += ".";
    } 
}

/* Raiz Cuadrada */
function raizCuadrada(){
    const pantalla = document.getElementById("pantalla");
    let valor = parseFloat(pantalla.innerHTML);
    if (valor < 0){
        pantalla.innerHTML = "Error";
    } else {
        pantalla.innerHTML = Math.sqrt(valor);
    }
    primerNumero = null;
    operador = null;
    esperandoSegundoNumero = false;
}

/* Cambiar signo */
function cambiarSigno(){
    const pantalla = document.getElementById("pantalla");
    if (pantalla.innerHTML !== "0" && pantalla.innerHTML !== "Error"){
        if (pantalla.innerHTML.startsWith("-")){
            pantalla.innerHTML = pantalla.innerHTML.substring(1);
        } else {
            pantalla.innerHTML = "-" + pantalla.innerHTML;
        }
    }
}

/* Elevar al cuadrado */
function elevarCuadrado() {
    const pantalla = document.getElementById("pantalla");
    let valor = parseFloat(pantalla.innerHTML);
    if (!isNaN(valor)) {
        pantalla.innerHTML = Math.pow(valor, 2);
    }
    primerNumero = null;
    operador = null;
    esperandoSegundoNumero = false;
}

/* Elevar al cubo */
function elevarCubo() {
    const pantalla = document.getElementById("pantalla");
    let valor = parseFloat(pantalla.innerHTML);
    if (!isNaN(valor)) {
        pantalla.innerHTML = Math.pow(valor, 3);
    }
    primerNumero = null;
    operador = null;
    esperandoSegundoNumero = false;
}

/* Seno */
function seno(){
    const pantalla = document.getElementById("pantalla");
    let valor = parseFloat(pantalla.innerHTML);
    if (!isNaN(valor)){
        pantalla.innerHTML = Math.sin(valor * Math.PI / 180);
    }
    primerNumero = null;
    operador = null;
    esperandoSegundoNumero = false;
}

/* Coseno */
function coseno(){
    const pantalla = document.getElementById("pantalla");
    let valor = parseFloat(pantalla.innerHTML);
    if (!isNaN(valor)){
        pantalla.innerHTML = Math.cos(valor * Math.PI / 180);
    }
    primerNumero = null;
    operador = null;
    esperandoSegundoNumero = false;
}

/* Tangente */
function tangente(){
    const pantalla = document.getElementById("pantalla");
    let valor = parseFloat(pantalla.innerHTML);
    if (!isNaN(valor)){
        pantalla.innerHTML = Math.tan(valor * Math.PI / 180);
    }
    primerNumero = null;
    operador = null;
    esperandoSegundoNumero = false;
}

function agregarPi(){
    const pantalla = document.getElementById("pantalla");
    const valorPi = Math.PI;
    if (pantalla.innerHTML === "0" || esperandoSegundoNumero) {
        pantalla.innerHTML = valorPi;
        esperandoSegundoNumero = false;
    } else {
        pantalla.innerHTML += valorPi;
    }
}




/* Manejo de teclado */
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key) && key !== ' ') { //números
        numero(Number(key));
    }

    if (key === 'Escape' || key.toLowerCase() === 'c') { //Borrar todo con la c o esc
        borrar();
    }

    if (key === 'Backspace') { //Borrar ultimo con la tecla delete
        borrarUltimo();
    }

     // Cambiar aquí el manejo del signo menos
    if (key === '-') {
        // Si la pantalla está en 0 o vacía, poner el signo negativo
        if (pantalla.innerHTML === "0" || pantalla.innerHTML === "") {
            pantalla.innerHTML = "-";
            esperandoSegundoNumero = false;
        } else {
            operar(key);
        }
        return; // Evita que siga procesando este evento
    }

    if (['+', '-', '*', '/'].includes(key)) { //Suma, resta, multiplicación y división
        operar(key);
    }

    if (key === '=' || key === 'Enter') { //Igual con igual o Enter
        calcular();
    }

     if (key === ',' || key === '.') { //Decimales con puntos y comas
        agregarDecimal();
    }

    if (key.toLowerCase() === 'r') { //Raiz
        raizCuadrada();
    }

    if (key.toLowerCase() === 'p') {
        const valorPi = Math.PI;
        if (pantalla.innerHTML === "0" || esperandoSegundoNumero) {
            pantalla.innerHTML = valorPi;
            esperandoSegundoNumero = false;
        } else {
            pantalla.innerHTML += valorPi;
        }
    }
});











