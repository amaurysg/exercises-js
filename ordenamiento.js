//ORDENAMIENTO 
//EJERCICIO 48

/* var arr = [1, 2, 3] //[2,1,3]
var nArr = []
//swap(arr, 0, 1)
console.log("before", arr) // [2,1,3] //[3,1,2]


for (i = 0; i < arr.length; i++) {
  arr[i] = arr[i] - 1

}
console.log("after", arr) */
/* var arr = [1, 2, 3]
var newArray = []
function swap(arr, primer, segundo) {


  var temp = segundo
  arr[primer] = arr[segundo]
  arr[segundo] = temp
  newArray.push(...arr)


}
swap(arr, 0, 1)
console.log(arr)
console.log(newArray) */

//EJERCICIO 49 
/* var arr = [1, 21, 31, 4, 11, 5, 6, 7, 8, 9]
var newArr = arr.sort((a, b) => a - b)
console.log(newArr) */


function orden() {
  var arr = [4, 11, 12, 10, 21, 1, 2, 7, 21, 6]
  var aux
  console.log(arr)
  for (i = 1; i < arr.length; i++) {
    for (j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        aux = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = aux
      }
    }

  }
  console.log(arr)
}
orden()
/*

function Burbuja() {
  var lista = [389, 703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131];
  var aux;

  console.log(lista); // Mostramos, por consola, la lista desordenada
  // Algoritmo de burbuja
  for (k = 1; k < lista.length; k++) {
    for (i = 0; i < (lista.length - k); i++) {
      if (lista[i] > lista[i + 1]) {
        aux = lista[i];
        lista[i] = lista[i + 1];
        lista[i + 1] = aux;
      }
    }
  }

  console.log(lista); // Mostramos, por consola, la lista ya ordenada
}
Burbuja() */
