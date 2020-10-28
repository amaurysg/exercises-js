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

/* var num = 10
var cont = 0
for (i = 1; i <= num; i++) {

  console.log(i)
  if (i % num == 0) {
    cont++
  }


}
console.log(cont) */

/* var c = 5

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
function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}
 */

var n = prompt('ingrese un número');   // "n" va ser el numero a analizar

var i, divi = 0;

for (i = 1; i <= n; i++)                // se analiza un número a la vez 
{

  if (n % i == 0)          // va buscar divisores con resto cero
  {

    divi++;       // acumula mis divisores en 1   // si acumula más de 2 divisores NO es primo. Si solo acumula dos ES primo
  }
}


if (divi == 2)    // analiza si solo tuvo 2 divisores con cero
{

  document.write('el numero es primo');

}

else                                          // si hubo mas de 2 divisores no es primo
{
  document.write('el numero no es primo');
}


