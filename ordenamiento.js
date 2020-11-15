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


/* function orden() {
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
orden() */
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
/*
var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var newArr = arr.flat()
console.log(newArr)
 */
/* var nRepeticiones = 8

for (i = 1; i < nRepeticiones; i++) {
  console.log(`Hola ${i} mundo`)
} */

/* function processData(input) {
  var i;
  for (i = 0; i < parseInt(input); i++) {
    console.log("hello world");
  }
}
processData(5) */

/* let arregloOriginal = ["PHP", "JavaScript", "Go", "Rust", "Java", "C", "CSS", "Python"],
  arregloDeArreglos = []; // Aquí almacenamos los nuevos arreglos
console.log("Arreglo original: ", arregloOriginal);
const LONGITUD_PEDAZOS = 3; // Partir en arreglo de 3
for (let i = 0; i < arregloOriginal.length; i += LONGITUD_PEDAZOS) {
  let pedazo = arregloOriginal.slice(i, i + LONGITUD_PEDAZOS);
  arregloDeArreglos.push(pedazo);
}
console.log("Arreglo de arreglos: ", arregloDeArreglos); */

/* let alumnos = ["Carlos", "Clara", "Cristina", "Fernando", "Ivan", "Lara", "Mercedes", "Rafael", "Roberto", "Sandra", "Tania", "Raulito", "Milagros"];

let mitad = Math.floor(alumnos.length / 2);

let inicio = alumnos.slice(0, mitad);
let final = alumnos.slice(mitad); // si no se indica el índice final, se usa la longitud del array como referencia

console.log('Primera parte:', inicio)
console.log('Segunda parte', final)
console.log('Array original', alumnos.toString()); */



/* var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function divArr(arr) {
  var mitad = Math.floor(arr.length / 2)
  var newArr = []
  newArr.push(arr.slice(0, mitad), arr.slice(mitad))

  console.log(newArr)
}
divArr(arr) */
/*
var arr = [1, 2, [3, 4]];
var newArr = arr.flat()
console.log(newArr)

var arr3 = [1, 2, [3, 4, [5, 6]]];
console.log("Arr3", arr3)

var newArr3 = arr3.flat(2)
console.log("new", newArr3) */


/* var other = Math.max(...arr)
console.log(other) */

/* var arr = [1, 2, 3]
function findLargest(arr) {

  var other = Math.max(...arr)

  console.log(other)
}
findLargest(arr) */


/* function calculateClosestTo0(arr) {
  let closest = 0
  for (let i = 0; i < tempArray.length; i++) {
    if (closest === 0) {
      closest = arr[i]
    } else if (arr[i] > 0 && arr[i] <= Math.abs(closest)) {
      closest = arr[i]
    } else if (arr[i] < 0 && -arr[i] < Math.abs(closest)) {
      closest = arr[i]
    }
  }
  return closest
}
tempArray = [-9, 8, 2, -5, 7]
console.log(calculateClosestTo0(tempArray)) */


/* const sequencesConverge = (a, b) => {
  const [a3, a9, b3, b9] = [a % 3, a % 9, b % 3, b % 9];
  return (a9 === 0 && b9 === 0) || (a9 * b9 !== 0 && (a3 === b3 || a3 + b3 === 3));
}
console.log(sequencesConverge(57, 78));
console.log(sequencesConverge(471, 480)); */

/* function computeJoinPoint(s1, s2) {
  console.log(s1, s2);
  const digitSum = num => {
    return String(num).split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
  }
  let maxIterations = 1000; // so the browser won't hang if you try something weird
  while (true) {
    if (!maxIterations--) {
      throw new Error('giving up');
    }
    if (s1 < s2) {
      s1 += digitSum(s1);
      console.log(s1, s2);
    } else if (s1 > s2) {
      s2 += digitSum(s2);
      console.log(s1, s2);
    } else {
      return s1;
    }
  }
}
console.log('join point:', computeJoinPoint(57, 78)); */



//console.log(sumDigits(18))


/*
function foundPoints(num1, num2) {

  const sumDigits = (num) => {
    var res = 0
    var other = num.toString().split("")

    for (let i = 0; i < other.length; i++) {
      res += parseInt(other[i])
    }
    return res
  }
  let maxIterations = 1000
  while (true) {
    if (!maxIterations--) {
      throw new Error("Much iterations 🙄")
    }
    if (num1 < num2) {
      num1 += sumDigits(num1)
      console.log('num1,num2', num1, num2)
    } else if (num1 > num2) {
      num2 += sumDigits(num2)
      console.log('num1,num2', num1, num2)

    } else {
      return `${num1} 🤩`
    }
  }
}

console.log(foundPoints(78, 480)) */


/* class Mascotas {
  constructor(name, age, status) {
    this.name = name,
      this.age = age,
      this.status = status
  }
  miMetodoUno() {
    console.log(`Mi nombre es ${this.name}`)
  }
  whatIsMain() {
    if (catOne.age > catTwo.age) {
      console.log(`El gato uno es mayor`)
    } else {
      console.log("el gato dos es mayor")
    }

  }
}



var catOne = new Mascotas("felix", 8, "live")
var catTwo = new Mascotas("Sheldón", 12, "Dead")
var catThree = new Mascotas("Pepo", 9, "Dead")

catOne.miMetodoUno()
catTwo.miMetodoUno() */
