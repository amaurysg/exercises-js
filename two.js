//EJERCICIO 5
/* var num = prompt("Dame un número 🙄")

if (num % 2 == 0) {
  alert("Es par 😄")
} else {
  alert("No es par 🤨")
} */

//EJERCICIO 6
/* var num = prompt("Dame un número 🙄")

if (num % 5 == 0) {
  console.info("Divisible por 5😄")
} else {
  console.warn("No es divisible por 5 🤨")
}
 */
//EJERCICIO 7
/* var num = prompt("Dame un número 🙄")

if (num % 5 == 0 && num % 11 !== 0) {
  console.info("Divisible solo por 5 ✋🏻")
} else if (num % 5 !== 0 && num % 11 == 0) {
  console.info("Divisible solo por 11 ✋🏻✋🏻👆🏻")
} else if (num % 11 == 0 && num % 5 == 0) {
  console.info("Divisible solo por 5 y 11😄")
} else {
  alert("Tú numero no es divisible por 5 o 11 😮")
} */

//EJERCICIO 8
/* var num1 = prompt("Dame un número 👆🏻")
var num2 = prompt("Dame otro número ✌🏻")

if (num1 > num2) {
  alert(`El ${num1} es mayor que ${num2}`)
}
else {
  alert(`El ${num2} es mayor que ${num1}`)
} */

//EJERCICIO 9
/* var num1 = prompt("Dame un número 👆🏻")
var num2 = prompt("Dame otro número ✌🏻")

num1 > num2 ? alert(`${num1} es mayor que ${num2}`) : alert(`${num2} es mayor que ${num1}`)
 */

//EJERCICIO 10

/* var str = prompt("Dame una frase")

isNaN(str.charAt(0)) ? alert(`${str.charAt(0)} es un String`) : alert(`${str.charAt(0)} es un Number`) */

//EJERCICIO 10 
/* var angulo1 = parseInt(prompt("Dame un angulo interno 👆🏻"))
var angulo2 = parseInt(prompt("Dame otro angulo interno ✌🏻"))
var angulo3 = parseInt(prompt("Dame otro angulo interno ✌🏻👆🏻"))

sumAngulos = angulo1 + angulo2 + angulo3
console.log(sumAngulos)
if (sumAngulos > 180) {
  alert("No es un triangulo válido")
} else {
  alert("Triangulo Válido")
}
 */
//EJERCICIO 11

var str = "hola"
if (str.charAt(0) !== str.charAt(0).toLocaleLowerCase()) {
  console.log(`${str.charAt(0)} es Mayúscula`)
} else {
  console.log(`${str.charAt(0)} NO es Mayúscula`)
}

