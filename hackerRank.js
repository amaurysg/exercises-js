/* function sumVar(a,b,c){
    var i = 4
    var d = 4.0
    var s = "HackerRank "

    var a ;
    var b ;
    var c ;

    var sum1 = i + a
    var sum2 = b+d
    var sum3 = `${s}${c}`  

    console.log(sum1)
    console.log(sum2)
    console.log(sum3)


    var tip = meal_cost *(tip_percent/100)
    var tax = meal_cost *(tax_percent/100)
    var totalCost = Math.round(meal_cost + tip + tax )
    console.log(totalCost)

}
sumVar(2,2.2,"is the best place to learn and practice coding!") */

/* function rara(mealCost, tipPercent, taxPercent){
  console.log("Valor comida", mealCost)
  var tip = mealCost *(tipPercent/100)
    console.log("Valor Propina",tip)
  var tax = mealCost *(taxPercent/100)
  console.log("Valor Impuestos",tax)
  var totalCost = Math.round(mealCost + tip + tax )
  console.log("Total a pagar:", totalCost)

  console.log(mealCost,taxPercent,tipPercent)


}
rara(30,10,10) */




/*    class Person {
    var age: Int = 0

    init (initialAge: Int) {
        if initialAge > 0 {
            age = initialAge
        } else {
            age = 0
            print("Age is not valid, setting age to 0.")
        }
    }

    func amIOld () {
        if age < 13 {
            print("You are young.")
        } else if age >= 13 && age < 18 {
            print("You are a teenager.")
        } else {
            print("You are old.")
        }
    }

    func yearPasses() {
        age += 1
    }
}

  // Add some more code to run some checks on initialAge
    // I always save initial value !
    var age = initialAge;
    
    if (age < 0) {
        age = 0;
        console.log("Age is not valid, setting age to 0.");
    }
    
    this.amIOld=function(){
        // Do some computations in here and print out the correct statement to the console
        switch (true) {
            case (age < 13):
                console.log("You are young.");
                break;
            case (age < 18):
                console.log("You are a teenager.");
                break;
            default:
                console.log("You are old.");
        }
    };
   
    this.yearPasses=function(){
        // Increment the age of the person in here
        return age += 1; 
    }; */

/*     function mul(n){
      for (var i =1; i<=10; i++){
        var result = n * i 
        console.log(`${n} x ${i} = ${result}`)
      }
    }
    mul(18) */
/* 
function processData(input) {
    let inputCopy = input.split("")
    let par = ""
    let impar =""
    console.log(inputCopy)
    
    
}
processData("Hacker Rank") */
/* function arrayReverse(arr){
    var arrRev = arr.reverse().join(" ")
  
    console.log(arrRev)
}
arrayReverse([8,4,38,2])
 */

 //CHALLENGE DAY 6 
/* function hackerRank(arr){
    
    var otherArr = arr.split().join(" ")

     var par= []
     var impar= []
     for ( i = 0; i< otherArr.length; i++){
      if ( i % 2 == 0 ){
        par.push(otherArr[i])
      }else{
          impar.push(otherArr[i])
      }
     }
     console.log(`${par.join("")} ${impar.join("")} `)
    
    
}
hackerRank("HackerRank")

 */

 /* CHALLANGE DAY EIGHT  */
/* 
var phoneBook = [
    {
        name :"sam", 
        num: 99912222
    },
    {
        name :"tom", 
        num: 11122222
    },
    {
        name :"harry", 
        num: 12299933
    }
]


function getNum(str){


    for ( i = 0; i < phoneBook.length ; i++){
        var resultado
        var match = false
       if (phoneBook[i].name === str){   
           resultado = phoneBook[i].num
           console.log(`${str} = ${resultado}`)    
            
       }else  {
           console.log("Not found")
       }
    }
    return true

}

       getNum("tom") */


    /*    function fac(num){
           var res =1
           for(i=1; i<=num; i++){
            res= res*i
           
         
           }
           console.log(res)
       }
fac(5)

 */
/* 
var num = 5
var bin = num.toString(2)
console.log(bin)

var numO = 101
var bin2 = parseInt(numO,2)
console.log('base 10', bin2) */
/* 
function numCon(num){
    var otherNum = num.split("")
    console.log()
}

var oo = 15
var otheroo = oo.split("")

console.log(otheroo) */

/* var arr = [1,1,1,0,1]
var cont = 0
for (i=1; i< arr.length; i++){
    if(arr[i]==arr[i++]){
     cont ++
    }else {
        cont=1
    }
}
console.log('cont', cont) */

    var n = 13
    // to give an array of 1s
    var nn = n.toString(2)
    console.log("nn",nn)
    var BinArr = n.toString(2).split('0');
    console.log("BinArr",BinArr)
   // if you are not using ES6 the you can also do this
   //	var max = Math.max.apply(null, BinArr)
    var max = Math.max(...BinArr);
    console.log("max", max)
    console.log(max.toString().length);