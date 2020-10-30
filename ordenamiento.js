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
var arr = [1, 2, 3]

function swap(arr, primer, segundo) {

  var temp = segundo
  arr[primer] = arr[segundo]
  arr[segundo] = temp

}
swap(arr, 0, 1)
console.log(arr)