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

//todo: Ejercicio del dia 6: 20-12-2022

//?46-Seleccionando entre muchas opciones con declaración switch

/*
function caseInSwitch(val) {
  let answer = "";
  // Cambia solo el código debajo de esta línea

switch(val){
case 1:
  console.log( answer = "alpha");
  break;
case 2:
  console.log(answer = "beta");
  break;
case 3:
  console.log( answer = "gamma");
  break;
case 4:
  console.log(answer = "delta");
  break;
}


  // Cambia solo el código encima de esta línea
  return answer;
}

caseInSwitch(1);
caseInSwitch(2);
caseInSwitch(3);
caseInSwitch(4);
*/

//?47-Agrega una opción predeterminada en las declaraciones switch

/*
function switchOfStuff(val) {
  let answer = "";
  // Cambia solo el código debajo de esta línea

switch (val) {
case "a":
  console.log(answer = "apple");
  break;
case "b":
  console.log(answer = "bird");
  break;
case "c":
  console.log(answer = "cat");
  break;
default:
  console.log(answer = "stuff");
  break;
}


  // Cambia solo el código encima de esta línea
  return answer;
}

switchOfStuff("a");
switchOfStuff("b");
switchOfStuff("c");
switchOfStuff("d");
*/

//?48-Múltiples opciones idénticas en las declaraciones "switch"
/*
function sequentialSizes(val) {
  let answer = "";
  // Cambia solo el código debajo de esta línea
switch(val){
  case 1:
  case 2:
  case 3:
    console.log(answer = "Low") ;
    break;
  case 4:
  case 5:
  case 6:
    console.log(answer = "Mid") ;
    break;
  case 7:
  case 8:
  case 9:
    console.log(answer = "High") ;
    break;
}


  // Cambia solo el código encima de esta línea
  return answer;
}

sequentialSizes(1);
sequentialSizes(5);
sequentialSizes(8);
*/

//?49-Reemplazando cadenas de "If Else" por "Switch"

/*
function chainToSwitch(val) {
  let answer = "";
  // Cambia solo el código debajo de esta línea

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1: 
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  // Cambia solo el código encima de esta línea
  return answer;
}

chainToSwitch(7);
chainToSwitch("bob");
chainToSwitch(42);
chainToSwitch(1);
chainToSwitch(99);

console.log(chainToSwitch(7));
console.log(chainToSwitch("bob"));
console.log(chainToSwitch(42));
console.log(chainToSwitch(1));
console.log(chainToSwitch(99));
*/

//?50-Devuelve valores booleanos desde funciones
/*
function isLess(a, b) {
  // Cambia solo el código debajo de esta línea
  return a < b;
  // Cambia solo el código encima de esta línea
}

isLess(10, 15);

console.log(isLess(10, 15));
console.log(isLess(20, 15));
*/

//todo: Ejercicio del dia 7: 21/12/2022

//?51-Patrón de devolución anticipado para funciones
/*
// Configuración
function abTest(a, b) {
  // Cambia solo el código debajo de esta línea
  if(a < 0 || b < 0){
    return undefined;
  }

  // Cambia solo el código encima de esta línea

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

console.log(abTest(2,2));
*/

//?52-Conteo de cartas
/*
let count = 0;

function cc(card) {
  // Cambia solo el código debajo de esta línea
 if (card <= 6) 
    count++;
  else if (card >="10")
    count--;
  return count + (count > 0 ? ' Bet' : ' Hold');
  // Cambia solo el código encima de esta línea
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));
*/

//?53-Construye objetos en JavaScript

/*
const myDog = {
  // Cambia solo el código debajo de esta línea
  name: "Tobi",
  legs: 4,
  tails: 1,
  friends: [4]
  // Cambia solo el código encima de esta línea
};

console.log(myDog);
*/

//?54-Accede a propiedades de objetos con notación de puntos

/*
// Configuración
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats"
};

// Cambia solo el código debajo de esta línea
const hatValue = testObj.hat;      // Cambia esta línea
const shirtValue = testObj.shirt;    // Cambia esta línea

console.log(hatValue, shirtValue);
*/

//?55-Accede a propiedades de objetos con notación de corchete

/*
// Configuración
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Cambia solo el código debajo de esta línea
const entreeValue = testObj["an entree"];   // Cambia esta línea
const drinkValue = testObj["the drink"];    // Cambia esta línea

console.log(entreeValue, drinkValue);
*/

//?56-Accede a propiedades de objetos con variables

/*
// Configuración
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Cambia solo el código debajo de esta línea
const playerNumber = 16;  // Cambia esta línea
const player = testObj[playerNumber];   // Cambia esta línea

console.log(player);
*/

//?57-Actualizando las propiedades de un objeto

/*
// Configuración
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";


// Cambia solo el código debajo de esta línea

console.log(myDog);
*/

//?58-Añade nuevas propiedades a un objeto de JavaScript

/*
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woff";

console.log(myDog);
*/

//?59-Elimina propiedades en un objeto de JavaScript

/*
// Configuración
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog.tails;

// Cambia solo el código debajo de esta línea

console.log(myDog);
*/

//?60-Usa objetos para hacer búsquedas

/*
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
// After converting our case statements into object properties you can make use of the variable `result` to let the function return the correct value.


  result = lookup[val];
  // Only change code above this line
  return result;
}

console.log(phoneticLookup.delta);
*/

//?61-Verifica las propiedades de un objeto

/*
function checkObj(obj, checkProp) {
  // Cambia solo el código debajo de esta línea
   if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  } 
  // Cambia solo el código encima de esta línea
}

console.log(checkObj);
*/

//todo: Ejercicio del dia 8: 22/12/2022

//?62-Manipulando objectos complejos

/*
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Shakira",
    "title": "Loba",
    "release_year": 2002,
    "formats": [
      "DVD",
      "STRIMING",
      "FLY"
    ]
  }
];

console.log(myMusic);
*/

//?63-Accede a objetos anidados

/*
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);
*/

//?64-Accede a arreglos anidados

/*
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

console.log(secondTree);
*/

//?65-Colección de discos

/*
// Configuración
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Cambia solo el código debajo de esta línea
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

console.log(updateRecords(recordCollection, 1245, 'artist', 'ABBA'));
*/

//?66-Itera con el bucle "while" de JavaScript

/*
// Configuración
const myArray = [];

let i = 5;
while(i >= 0) {
  myArray.push(i);
  i--;
}

// Cambia solo el código debajo de esta línea

console.log(myArray);
*/

//?67-Itera con los bucles "for" de JavaScript

/*
// Configuración
const myArray = [];

for (let i = 1; i < 6; i++){
  myArray.push(i);
}

// Cambia solo el código debajo de esta línea
console.log(myArray);
*/

//?68-Itera números impares con un bucle "for"
/*
// Configuración
const myArray = [];


for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}

// Cambia solo el código debajo de esta línea
console.log(myArray);
*/

//?69-Cuenta hacia atrás con un bucle "for"

/*
// Configuración
const myArray = [];

for(let i = 9; i > 0; i-=2){
  myArray.push(i);
}

// Cambia solo el código debajo de esta línea

console.log(myArray)
*/

//?70-Itera a través de un arreglo con un bucle "for"

/*
// Configuración
const myArr = [2, 3, 4, 5, 6];

let total = 0;

for (let i = 0; i < myArr.length; i++){
  total += myArr[i];
}

// Cambia solo el código debajo de esta línea

console.log(total);
*/

//?71-Anida bucles "for"

/*
function multiplyAll(arr) {
  let product = 1;
  // Cambia solo el código debajo de esta línea
  for(let i=0; i < arr.length; i++){
    for (let j= 0; j < arr[i].length; j++){
      product = product * arr[i][j];
    }
  }
  // Cambia solo el código encima de esta línea
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
console.log(multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]));
console.log(multiplyAll([[1], [2], [3]]));
*/

//?72-Itera con el bucle "do...while" de JavaScript

/*
// Configuración
const myArray = [];
let i = 10;

// Cambia solo el código debajo de esta línea
do {
  myArray.push(i);
  i++;
} while (i <= 10)

console.log(myArray);
*/

//?73-Reemplaza bucles usando recursión

/*
function sum(arr, n) {
  // Cambia solo el código debajo de esta línea
 if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  // Cambia solo el código encima de esta línea
}

console.log(sum([1], 0));
console.log(sum([2, 3, 4], 1));
console.log(sum([2, 3, 4, 5], 3));
*/

//?74-Búsqueda de perfiles





