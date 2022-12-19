//?1-Agregar variables de cadenas

/*const someAdjective = "Nice";
let myStr = "Learning to code is ";
myStr += someAdjective;

console.log(myStr);*/

//?2-Encuentra la longitud de una cadena

/*
//? Configuración
let lastNameLength = 0;
const lastName = "Lovelace";

//? Cambia solo el código debajo de esta línea
lastNameLength = lastName.length;

console.log(lastNameLength);
*/

//?3-Utiliza la notación de corchetes para encontrar el primer carácter en una cadena

/*
//? Configuración
let firstLetterOfLastName = "";
const lastName = "Lovelace";

//? Cambia solo el código debajo de esta línea
firstLetterOfLastName = lastName[0]; //? Cambia esta línea

console.log(firstLetterOfLastName)
*/

//?4-Comprende la inmutabilidad de las cadenas

/*
//? Configuración
let myStr = "Jello World";

//? Cambia solo el código debajo de esta línea
myStr= "Hello World"; //? Cambia esta línea
//? Cambia solo el código encima de esta línea

console.log(myStr);
*/

//?5-Utiliza la notación de corchetes para encontrar el enésimo carácter en una cadena

/*
//? Configuración
const lastName = "Lovelace";

//? Cambia solo el código debajo de esta línea
const thirdLetterOfLastName = lastName[2]; //? Cambia esta línea

console.log(thirdLetterOfLastName)
*/

//?6-Utiliza la notación de corchetes para encontrar el último carácter en una cadena

/*
//? Configuración
const lastName = "Lovelace";

//? Cambia solo el código debajo de esta línea
const lastLetterOfLastName = lastName[lastName.length -1]; //? Cambia esta línea

console.log(lastLetterOfLastName);
*/

//?7-Utiliza la notación de corchetes para encontrar el carácter enésimo final en una cadena

/*
//? Configuración
const lastName = "Lovelace";

//? Cambia solo el código debajo de esta línea
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; //? Cambia esta línea

console.log(secondToLastLetterOfLastName)
*/

//?8-Palabra en blanco

/*
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

//? Cambia solo el código debajo de esta línea
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; //? Cambia esta línea
//? Cambia solo el código encima de esta línea

console.log(wordBlanks);
*/

//?9-Almacena múltiples valores en una variable utilizando los arreglos de JavaScript

/*
//? Cambia solo el código debajo de esta línea
const myArray = ['Ivan Polanco', 2];

console.log(myArray)
*/

//?10-Anida un arreglo dentro de otro arreglo

/*
//? Cambia solo el código debajo de esta línea
const myArray = [['Ivan Polanco', 24], ['Pato', 7]];

console.log(myArray);
*/

//?11-Accede a los datos de un arreglo con índices

/*
const myArray = [50, 60, 70];

const myData = myArray[0];

console.log(myData)
*/

//?12-Modifica los datos de un arreglo con índices

/*
//? Configuración
const myArray = [18, 64, 99];

//? Cambia solo el código debajo de esta línea
myArray[0] = 45;

console.log(myArray);
*/

//?Complete en mi segundo dia de hacer ejercicio del 7 al 12 = Total 6 ejercicios simples (6-11-2022) 

//?13-Accede a arreglos multidimensionales con índices

/*
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];

  console.log(myData);
  */

//?14-Manipula arreglos con push()

/*const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])

console.log(myArray);
*/

//?15-Manipula arreglos con pop()

/*
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

console.log(removedFromMyArray);
*/

//?16-Manipula arreglos con shift()

/*const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();

console.log(removedFromMyArray);
*/

//?17-Manipula arreglos con unshift()

/*const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

console.log(myArray);
*/

//?18-Lista de compras

//Crea una lista de compras en la variable myList. 
//La lista debe ser un arreglo multidimensional que contenga varios sub-arreglos.

//El primer elemento de cada sub-arreglo debe contener una cadena con el nombre del artículo. 
//El segundo elemento debe ser un número que represente la cantidad, por ejemplo. 

//["Chocolate Bar", 15]

//Debe haber al menos 5 sub-arreglos en la lista.



/*const myList = [
    ["padre", 25],
    ["Marco Polo", 29],
    ["Jorge Martinez", 29],
    ["Ivan Polanco", 30],
    ["Marco Polo", 29]
  ];

  console.log(myList);
  */

//?19-Escribe JavaScript reutilizable utilizando funciones

/*function reusableFunction () {
    console.log("Hi World");
  }
  
  reusableFunction();
*/

//?20-Pasa valores a las funciones utilizando argumentos

/*function functionWithArgs(a, b) {
    console.log(a + b);
  }
  
  functionWithArgs(1,2)
  functionWithArgs(7,9)
*/

//?21-Devuelve un valor de una función utilizando "Return"

/*function timesFive(num) {
  return num * 5;
}

const answer = timesFive(0); //0
const answer1 = timesFive(2); //10
const answer2 = timesFive(5); //25

console.log(answer, answer1, answer2);
*/

//?22-Ámbito global y funciones
/*
//! Declara la variable myGlobal debajo de esta línea
let myGlobal = 10;

function fun1() {
  // Asigna 5 a oopsGlobal aquí
  oopsGlobal = 5;
}

//! Cambia solo el código encima de esta línea

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


console.log(fun1(),fun2());
*/

//?23-Ámbito local y funciones 2

/*
function myLocalScope() {
  //! Cambia solo el código debajo de esta línea
  let myVar;

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

//! Ejecuta y verifica la consola
//! myVar no está definida afuera de myLocalScope
console.log('outside myLocalScope', myVar); 
*/

//?24-Ámbito global vs. local en funciones

/*
//! Configuración
const outerWear = "T-Shirt";

function myOutfit() {
  //! Cambia solo el código debajo de esta línea
  const outerWear = "sweater"; //! Lo que hara es reescribir la variable global de la local
  //! Cambia solo el código encima de esta línea
  return outerWear;
}

myOutfit();

console.log(myOutfit());
*/

//?25-Comprendiendo el valor indefinido devuelto por una función

/*
//! Configuración
let sum = 0;

function addThree() {
  sum = sum + 3;
}

//! Cambia solo el código debajo de esta línea
function addFive() {
  sum = sum + 5
} 

//! Cambia solo el código encima de esta línea

addThree();
addFive();

console.log(addFive(), addThree());
*/

//?26-Asignación con un valor devuelto

/*
///! Configuración
let processed = 2;

function processArg(num) {
  return (num + 3) / 5;
}

//! Cambia solo el código debajo de esta línea
processed = processArg(7);

console.log(processed);
*/

//?27-Permanece en línea
/*
function nextInLine(arr, item) {
  
  //! Cambia solo el código debajo de esta línea
  arr.push(item);
  const removed = arr.shift();
  return removed;
  //! Cambia solo el código encima de esta línea
}

//! Configuración
let testArr = [1, 2, 3, 4, 5];

//! Muestra el código
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
*/


//?28-Comprende los valores booleanos

/*
function welcomeToBooleans() {
  //! Cambia solo el código debajo de esta línea

  return true; //! Cambia esta línea

  //! Cambia solo el código encima de esta línea
}

console.log(welcomeToBooleans());
*/

//?29-Usa lógica condicional con las sentencias "If"

/*
function trueOrFalse(wasThatTrue) {
  //! Cambia solo el código debajo de esta línea
   if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";


  //! Cambia solo el código encima de esta línea
}

console.log(trueOrFalse(true), trueOrFalse(false));
*/

//?30-Comparación con el operador de igualdad

/*
//! Configuración
function testEqual(val) {
  if (val == 12) { //! Cambia esta línea para que de diferente de 10
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

console.log(testEqual());
*/

//?31-Comparación con el operador de estricta igualdad

/*
//! Configuración
function testStrict(val) {
  if (val === 7) { //! Cambia esta línea que sea un numero estrictamente diferente de 10
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
*/

//?32-Practica comparando diferentes valores

/*
//! Configuración
function compareEquality(a, b) {
  if (a === b) { // Cambia esta línea para que sea estrictamente igual
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
compareEquality("20", 20);
*/

//--------Ejerccicio del dia 5: 19/12/2022
//?33-Comparación con el operador de desigualdad

/*
//! Configuración
function testNotEqual(val) {
  if (val != 99) { //! Cambia esta línea
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

console.log(testNotEqual(10));
*/

//?34-Comparación con el operador de estricta desigualdad

/*
//! Configuración
function testStrictNotEqual(val) {
  if (val !== 17) { //! Cambia esta línea
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

console.log(testStrictNotEqual(10));
*/

//?35-Comparación con el operador "mayor que"

/*
function testGreaterThan(val) {
  if (val > 100) {  //! Cambia esta línea
    return "Over 100";
  }

  if (val > 10) {  //! Cambia esta línea
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

console.log(testGreaterThan(1000));
*/

//?36-Comparación con el operador "mayor o igual que"

/*
function testGreaterOrEqual(val) {
  if (val >= 20) {  //! Cambia esta línea
    return "20 or Over";
  }

  if (val >= 10) {  //! Cambia esta línea
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

console.log(testGreaterOrEqual(20));
*/

//?37-Comparación con el operador "menor que"

/*
function testLessThan(val) {
  if (val < 25) {  // Cambia esta línea
    return "Under 25";
  }

  if (val < 55) {  // Cambia esta línea
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

console.log(testLessThan(54));
*/

//?38-Comparación con el operador "menor o igual que"

/*
function testLessOrEqual(val) {
  if (val <= 12) {  // Cambia esta línea
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Cambia esta línea
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

console.log(testLessOrEqual(50));
*/

//?39-Comparaciones con el operador lógico "and"

/*
function testLogicalAnd(val) {
  //! Cambia solo el código debajo de esta línea

  if (val<= 50 && val >= 25) {
      return "Yes";
  }

  //! Cambia solo el código encima de esta línea
  return "No";
}

testLogicalAnd(10);

console.log(testLogicalAnd(60));
*/

//?40-Comparaciones con el operador lógico "or"

/*
function testLogicalOr(val) {
  //! Cambia solo el código debajo de esta línea

  if (val < 10 || val > 20) {
    return "Outside";
  }

  //! Cambia solo el código encima de esta línea
  return "Inside";
}

testLogicalOr(15);

console.log(testLogicalOr(9));
*/

//?41-Introducción a las sentencias "Else"

/*
function testElse(val) {
  let result = "";
  //! Cambia solo el código debajo de esta línea

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  //! Cambia solo el código encima de esta línea
  return result;
}

console.log(testElse(11));
*/

//todo: Ejerccicio del dia 5 - parte 2: 19/12/2022

//?42-Introducción a las sentencias "Else If

/*
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  }else {
    return "Between 5 and 10";
  }
}

testElseIf(7);

console.log(testElseIf(11));
*/

//?43-Orden lógico de las sentencias "if else"

/*
function orderMyLogic(val) {
  if(val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

console.log(orderMyLogic(8));
*/

//?44-Encadena sentencias if else

/*
function testSize(num) {
  // Cambia solo el código debajo de esta línea
if(num < 5){
  return "Tiny"
}else if (num < 10){
  return "Small"
}else if (num < 15){
  return "Medium"
}else if (num < 20){
  return "Large"
}else if (num >= 20){
  return "Huge"
}

  return "Change Me";
  // Cambia solo el código encima de esta línea
}

console.log(testSize(25));
*/

//?45-Código de golf

/*
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Cambia solo el código debajo de esta línea
  if (strokes == 1){
    return names[0];
  } else if (strokes <= par -2){
    return names[1];
  } else if (strokes === par -1){
    return names[2];
  } else if (strokes === par){
    return names[3];
  }else if (strokes == par + 1){
    return names[4];
  }else if (strokes == par + 2){
    return names[5];
  }else if (strokes >=par + 3) {
    return names[6];
  }

  return "Change Me";
  // Cambia solo el código encima de esta línea
}

golfScore(5, 4);

console.log(golfScore(4, 1)); //Hole-in-One
console.log(golfScore(4, 2)); //Eagle
console.log(golfScore(5, 4)); //Berdie
console.log(golfScore(4, 4) ); //Par
console.log(golfScore(1, 1)); //Hole-in-one!
console.log(golfScore(4, 5)); //Bogey
console.log(golfScore(4, 6)); //Double Bogey
console.log(golfScore(4, 7)); //Go Home!
*/

//?46-Seleccionando entre muchas opciones con declaración switch
