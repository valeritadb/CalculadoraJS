/* Pinta el numero que pulsemos */
function numero(num){

    console.log(num)

    const pantalla = document.getElementById("pantalla"); //recibe el valor inicial de la pantalla

    console.log("pantalla " + pantalla.innerHTML);

    if (pantalla.innerHTML == 0){ //si la pantalla tiene un 0 se pinta el numero 
        pantalla.innerHTML = num; 

    } else { //y si ya hay numero le pinta otro detras
        pantalla.innerHTML = pantalla.innerHTML + num; 
    }
}

/* Funcion de borrar todos los numeros */
function borrar() {
    const pantalla = document.getElementById("pantalla"); // Accede al elemento de la pantalla
    pantalla.innerHTML = "0"; // Reinicia el contenido a cero
}

/*Funcion que elimina el último número de la pantalla */
function borrarUltimo() {
    const pantalla = document.getElementById("pantalla"); //recibe el valor de la pantalla

    let contenido = pantalla.innerHTML; //almacena el valor de la pantalla en "contenido"

    // Si hay más de un carácter, elimina el último
    if (contenido.length > 1) { 
        pantalla.innerHTML = contenido.slice(0, -1);
    } else {
        // Si solo queda un carácter, vuelve a mostrar "0"
        pantalla.innerHTML = "0";
    }
}

// SOLO NÚMEROS DESDE TECLADO 
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Si es un número
    if (!isNaN(key) && key !== ' ') {
        numero(Number(key));
    }

    // Si es borrar todo (Escape o C/c)
    if (key === 'Escape' || key.toLowerCase() === 'c') {
        borrar();
    }

    // Si es borrar último (Backspace)
    if (key === 'Backspace') {
        borrarUltimo();
    }

});







