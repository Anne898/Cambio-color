var elements = document.getElementsByTagName("body");
console.log('elements', elements);

var body = elements[0];

//agregar atributi class al body
//body.className = "background-red";

var colorClasses = ["background-red", "background-green", "background-blue", "background-pink"];

//Seleccionar un indice aleatoriamente (3 posibilidades)
//var colorIndex = Math.floor(Math.random() *3 );

var cambiarColor = function () {
    var colorIndex = Math.floor(Math.random() * colorClasses.length);
    var selectedColorClass = colorClasses[colorIndex];
    body.className = selectedColorClass;
}

cambiarColor();


//Botón
var botonCambiar = document.getElementById("boton_cambiar");

/*botonCambiar.onclick = function () {

    cambiarColor();

}*/

botonCambiar.onclick = cambiarColor;

//cambiar cada 2 seg
setInterval(cambiarColor, 500);
