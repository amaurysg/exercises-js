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
var array = [1, 2, 3, 4, 5, 25, 6, 1, 100]
/* 
const sum = array.reduce((acc, value) => acc + value)
const prom = sum / array.length
console.log(prom) */
cont = 0
for (i = 0; i < array.length; i++) {
  cont += array[i]
}
console.log("Sumatoria", cont, `promedio con ${array.length} =`)
var prom = Math.round(cont / array.length)
console.log(prom)