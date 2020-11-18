//ESTUDIO DE OBJETOS//
/* 
var myCar = new Object()


myCar.make = "Ford"
myCar.model = "Mustang"
myCar.year = 1980
 */


/* var myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1970,
  color
} */

//Podemos acceder 
//Los objetos a veces son llamados arreglos asociativos
/* myCar["make"]
myCar["model"]
myCar["year"]
console.log(myCar["year"])
console.log(myCar["model"])
console.log(myCar["make"]) */
/* 
var myObj = new Object(),
  str = "My String",
  rand = Math.random(),
  obj = new Object()

console.log(myObj) */

/* function showProps(obj, objName) {
  var result = ``; //crea variable para result 
  for (var i in obj) {
    console.log('i', i)
    // obj.hasOwnProperty() se usa para filtrar propiedades de la cadena de prototipos del objeto
    if (obj.hasOwnProperty(i)) {

      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  return result;
}
console.log(showProps(myCar, "myCar")) */

/* function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
var rand = new Person('Rand McKinnon', 33, 'M');
var ken = new Person('Ken Jones', 39, 'M');

function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);

var Car = { make: "Honda", model: "154" };

for (const llave in Car) {
  console.log(`${llave}: ${Car[llave]}`)
} */

function creaSumador(x) {
  return function(y) {
    return x + y;
  };
}

var suma5 = creaSumador(5);
var suma10 = creaSumador(10);


console.log(suma5(8));  // muestra 7
console.log(suma10); // muestra 12 