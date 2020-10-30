//EJERCICIO 31
/* var array = [1, 2, 3, 4, 5, 6]

for (i = 0; i < array.length; i++) {
  console.log("Elemento:", array[i])
} */

//EJERCICIO 32

/* var array = [1, 2, 3, 4, 5, 6]
let i = 0;
while (i < array.length) {
  console.log(`Elemento:`, array[i]);
  i++

} */

//EJERCICIO 33
/* var array = [1, 2, 3, 4, 5, 6]

array.forEach((e) => {
  console.log("Elemento:", e)
}) */

//EJERCICIO 34
/* var array = [1, 2, 3, 4, 5, 6]

array.forEach((e) => {
  console.log(e + 1)

}) */

//EJERCICIO 35
/* var array = [1, 2, 3, 4, 5, 6]
const newArray = array.map((e) => {
  return e + 1
})
console.log(newArray) */

//EJERCICIO 35
/* var array = [1, 2, 3, 4, 5, 25, 6, 1, 100] */
/*
const sum = array.reduce((acc, value) => acc + value)
const prom = sum / array.length
console.log(prom) */
/* cont = 0
for (i = 0; i < array.length; i++) {
  cont += array[i]
}
console.log("Sumatoria", cont, `promedio con ${array.length} = `)
var prom = Math.round(cont / array.length)
console.log(prom) */


//EJERCICIO 36
/* var array = []
function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

for (i = 0; i < 20; i++) {
  array.push(getRandomArbitrary(1, 20))
}
console.log(array) */

//EJERCICIO 37
/* var array = []
var lim = prompt("Dame un número")
function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

for (i = 0; i < lim; i++) {
  array.push(getRandomArbitrary(1, 20))
}
console.log(array)
console.log(array.sort((a, b) => a - b))

var repetidos = {};

array.forEach(function (numero) {
  repetidos[numero] = (repetidos[numero] || 0) + 1;
});

console.log(repetidos);



let unicos = new Set(array);

console.log("Unicos: ", [...unicos]); */

//EJERCICIO 40

/* var colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]

function containColors(color) {
  if (colores.includes(color)) {
    console.log("Existe")
  } else {
    console.log("NOOO")
  }
}
containColors("verde") */
