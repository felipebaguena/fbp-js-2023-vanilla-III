// 1. Pedir dos números y decir si son múltiplos o no.

// let numero1 = parseInt(prompt("Introduce el primer número"));
// let numero2 = parseInt(prompt("Introduce el segundo número"));

// if (numero1 % numero2 === 0){
//     console.log("El primer número es múltiplo del segundo");
// } else {
//     console.log("El primer número no es múltiplo del segundo")
// }

// //VERSIÓN CON TERNARIA//

// let resultado = (numero1 % numero2 === 0) ? "El primer número es múltiplo del segundo" : "El primer número no es múltiplo del segundo";

// console.log (resultado);

// 2. Pedir dos números y decir cual es el mayor.

// let numero1 = parseInt(prompt("Introduce el primer número"));
// let numero2 = parseInt(prompt("Introduce el segundo número"));

// if (numero1 > numero2) {
//     console.log ("El primer número es el mayor");
// } else if (numero2 > numero1) {
//     console.log ("El segundo número es el mayor");
// } else {
//     console.log ("Los números son iguales");
// }

// 3. Pedir un número y decir si es un número negativo, si es positivo o cero.

// let numero1 = parseInt(prompt("Introduce el primer número"));

// if (numero1 > 0) {
//     console.log ("El número es mayor que cero");
// } else if (numero1 < 0) {
//     console.log ("El número es menor que cero");
// } else {
//     console.log ("El número es 0");
// }

// 4. Pedir un string y determinar si tiene cinco caracteres o más.

// let texto = prompt("Introduce el texto");
// let caracteres = texto.length;
// let resultado = (caracteres.length > 5) ? `${texto} tiene más de cinco carácteres, concretamente tiene ${caracteres} carácteres` : `${texto} no tiene más de cinco carácteres, concretamente tiene ${caracteres} carácteres`;
// console.log(resultado);

// 5. Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres números y
// determinar si el promedio es mayor que cinco.

// let num1 = parseInt(prompt("Introduce el primer número, del 1 al 10"));
// let num2 = parseInt(prompt("Introduce el segundo número, del 1 al 10"));
// let num3 = parseInt(prompt("Introduce el tercer número, del 1 al 10"));

// let resultado = (num1 + num2 + num3) / 3

// if (((num1 && num2 && num3) > 10) || ((num1 && num2 && num3) < 1)) {
//     console.log ("Introduce números entre el 1 y el 10");
// }   else if (resultado > 5){
//     console.log ("El promedio es mayor que cinco");
// }   else {
//     console.log ("El promedio es menor que cinco");
// }

// 6. Pedir una cadena de texto y comprobar que todas sus letras estén en minúsculas.

// let texto = prompt("Introduce tu texto");

// let resultado = (texto === texto.toLowerCase()) ? "El texto está escrito en minúsculas" : "El texto no está escrito en minúsculas";

// console.log (resultado);

// 7. Crear un número aleatorio entre el 1 y 20 y comprobar si es par o impar. Mostrar además el
// número.

// let aleatorio = Math.floor(Math.random() * 20) +1;

// let resultado = (aleatorio % 2 === 0) ? `${aleatorio} es par` : `${aleatorio} es impar`;

// console.log(resultado);

// 8. Crea un programa que lea tres notas de un alumno, calcule la media e indique si ha aprobado
// o no.

// let notas = parseInt(prompt("¿cuántas notas vasa introducir?"));
// let calificación = 0;
// let resultado = 0;

// for (let i = 0; i < notas; i++) {
//     calificación = parseInt(prompt("Introduce el resultado del examen"));
//     resultado += calificación
// }
// let notamedia = resultado/notas;
// let aprobado = (notamedia >= 5) ? `Tu nota media es ${notamedia}, enhorabuena, estás aprobado`: `Tu nota media es ${notamedia}, estás suspendido`;

// console.log(aprobado);

// 9. Crea un programa para una tienda de coches: si el coche a la venta es un Ford Fiesta, el
// descuento es de un 5 %. Si el coche a la venta es un Ford Focus, el descuento es del 10 %. El
// usuario introduce marca y modelo y el programa saca el descuento correspondiente por
// pantalla.

// let marca = prompt("Introduce la marca del coche");
// let modelo = prompt("Introduce el modelo del coche");

// if (marca.toLowerCase() && modelo.toLowerCase() === "fiesta") {
//     console.log ("El descuento es del 5%");  
// } else if (marca.toLowerCase() && modelo.toLowerCase() === "focus") {
//     console.log ("El descuento es del 10%");
// } else {
//     console.log ("Este modelo no tiene descuento");
// }            