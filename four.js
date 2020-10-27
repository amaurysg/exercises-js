//EJERCICIO 23
/* var num = 8, divisores = 0

for (i = 0; i <= num; i++) {
  if (num % i == 0) {
    console.log("divisor", i)
    divisores++
  }
}
console.log(`Numero de divisores`, divisores) */


var num = prompt("Dame un número")
var divisores = 0

for (i = 0; i <= num; i++) {
  if (num % i == 0) {
    console.log("divisor", i)
    divisores++
  }
}
console.log(`Numero de divisores`, divisores)
if (divisores == 2) {
  console.info(`${num} es Primo, solo tiene ${divisores} divisores`)
} else {
  console.info(`NO es Primo, tiene ${divisores} divisores`)
}