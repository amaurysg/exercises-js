//EJERCICIO 23
/* var num = 10, divisores = 0

for (i = 0; i <= num; i++) {
  if (num % i == 0) {
    console.log("divisor", i)
    divisores++
  }
}
console.log(`Numero de divisores`, divisores) */

//EJERCICIO 24
/* var num = prompt("Dame un número")
var divisores = 0

function primo(num) {


  for (i = 0; i <= num; i++) {

    if (num % i !== 0) {
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

}

primo(num) */

//EJERCICIO 25 
//Numero perfecto, aquel que la suma de sus divisores es igual así mismo,ejemplo, 6, divisores 1,2,3 => 1+2+3 = 6 

/* var num = prompt("Dame un número")
var cont = 0

console.log("Num:", num)


for (i = 1; i <= num - 1; i++) {

  if (num % i === 0) {
    console.log("divisor:", i)
    cont += i
  }
}
console.log("sumatoria de divisores:", cont)

if (cont == num) {
  console.log(`${num}, es Perfecto`)
} else {
  console.log(`${num}, no es Perfecto`)
}
 */
//EJERCICIO 26 NUMEROS PRIMOS HASTA N user 

/* /* var num = 10
var cont = 0
for (i = 1; i <= num; i++) {

  console.log(i)
  if (i % num == 0) {
    cont++
  }


}
console.log(cont) */
/*
var c = 25

var numerosPrimos = [];
var numerosNoPrimos = [];

for (j = 2; j < c; j++) {

  if (primo(j)) {
    numerosPrimos.push(j);
  } else {
    numerosNoPrimos.push(j)
  }

}

console.log(numerosPrimos);
console.log(numerosNoPrimos)



//FUNCION PRIMO
function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}
 */












/* num = 4
for (i = 0; i <= num; i++) {
  document.write("*")

}
document.write("<br>")
for (i = 0; i < num - 2; i++) {
  document.write("*")
  for (j = 0; j < num - 2; j++) {
    document.write(" ")
  }
  document.write("<br>")

}

for (i = 0; i <= num; i++) {
  document.write("*")

} */


