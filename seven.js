//EJERCICIO 41
/* var data1 = prompt("Ingrese dato")
var data2 = prompt("Ingrese dato")
var data3 = prompt("Ingrese dato")
var array = []
const addData = (data1, data2, data3) => {
  array.unshift(data1, data2, data3)
}
addData(data1, data2, data3)
console.log(array) */
/* var data2= prompt("Ingrese dato")
var data3= prompt("Ingrese dato") */

//EJERCICIO 42
/* var user = "1,2,3"
 var array = user.split(",")
console.log(array) */
/* for (i = 0; i < user.length; i++) {
  user.charAt(i)
  console.log(user.charAt(i))
} */

//EJERCICIO 43 
/* var array = ["Hola", "Mundo"]
var arrayToStr = array.join(" ")
console.log(arrayToStr) */

//UNION, INTERSECCION Y CONTEO 

//EJERCICIO 44
/* var array1 = ["Amaury", "Hola", "Mundo", "ok"]
var array2 = ["Julio", "Hello", "Word", "right"] */


/* var set1 = new Set([1, 2, 3, 4]),
  set2 = new Set([3, 4, 5, 6]);

const intersection = new Set(Array.from(set1).filter(x => set2.has(x)));//Set {3, 4}
const difference = new Set(Array.from(set1).filter(x => !set2.has(x))); //Set {1, 2}

console.log(intersection)
console.log(difference) */

/* var a = [1, 5, 3, 4],
  b = [1, 4]

var result = a.filter(function (e) {
  return b.indexOf(e) == -1
});

console.log(result); */
/* var arr1 = ["1", "2", "3", "6", "8", "1"]
console.log("Array1:", arr1)
var arr2 = ["1", "2", "4"]
console.log("Array2:", arr2)
var arrInt = []

for (i = 0; i < arr1.length; i++) {
  for (j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      arrInt.push(arr1[i])
    }
  }
}
console.log("Array Intersection:", arrInt) */

//EJERCICIO 45
/* var arr1 = ["1", "2", "3"]
console.log("Array1:", arr1)
var arr2 = ["1", "2", "4"]
console.log("Array2:", arr2)
var arrUnion = arr1.concat(arr2).sort()
console.log("Array Union:", arrUnion) */

/* var array1 = [
  { "nombre": "paco", "edad": "21" }
];

// Array con 2 objetos
var array2 = [
  { "nombre": "matias", "edad": "25" },
  { "nombre": "juan", "edad": "31" },
];

array1 = array1.concat(array2);
console.log(array1); */


/* var arr1 = ["1", "2", "3"]
console.log("Array1:", arr1)
var arr2 = ["1", "2", "4"]
console.log("Array2:", arr2)
var arrUnion = [...arr1, ...arr2]

console.log(arrUnion.sort()) */


/* var arr1 = ["1", "2", "3"]

var arr2 = ["1", "2", "4"]


var arr3 = []

function arrayUnion() {

  for (i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i])
  }
  for (j = 0; j < arr1.length; j++) {
    arr3.push(arr2[j])
  }
}
arrayUnion()

console.log(arr3)
 */

//Ejercicio 46
/* var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]
var arrP = []

function compare(arr1, arr2) {

  if (arr1.length == arr2.length) {
    console.log(`Ambos arrays tienen ${arr1.length} elementos`)


  } else {
    console.log(`No tienen la misma cantidad elementos`)
  }
}
console.log(arrP)
compare(arr1, arr2) */


/* var arr1 = [1, 2, 3];
var arr2 = [4, 5, 7];
var r = [];

for (i = 0; i < arr1.length; i++) {
  r.push(arr1[i] + arr2[i])
  //  r[i] = arr1[i] + arr2[i]
}
console.log(r); */
/* var arr1 = [1, 2, 3];
var arr2 = [4, 5, 7];
//var r = arr1.concat(arr2)
//var r = [...arr1, ...arr2];
console.log(r) */


//EJERCICIO 47
/* var arr1 = [1, 2, 3, 4, 5]
var arrR = []

function show() {
  arr1.reduce((acc, e) => {
    if (e % 2 == 0) {
      arrR.push(e)
    }
  })
}
show()
console.log(arrR) */

/*
var arr1 = [1, 2, 3, 4, 5]
var n = []

const resultado = arr1.reduce((acc, item) => {
  if (item % 2 === 0) {
    n.push(item)
  }

}, 0)
console.log(n)
console.log(resultado) */


//EJERCICIO 47
/* var palabras = ["amaury", "lorena", "ana", "patricia", "emiro", "mundo", "uva", "ortencia", "pedro"]
var result = []
var na = []

function showNameVocals() {
  for (i = 0; i < palabras.length; i++) {
    var inicial = palabras[i].charAt(0)
    if ((inicial == "a") || (inicial == "e") || (inicial == "i") || (inicial == "o") || (inicial == "u")) {
      result.push(palabras[i])
    } else {
      na.push(palabras[i])
    }
  }
}
showNameVocals()
console.log("resultado:", result)
console.log("na:", na) */