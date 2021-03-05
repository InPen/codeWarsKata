//Write a function, persistence, that takes in a positive parameter num
function persistence(number) {
//turn number into a string so we can check how many digits it has
let num = '' + number
//how many times must you multiply the digits in num until you reach a single digit.
if(num.length > 1){
  //multiply all digits of num
  num *(num.split(""))
//how can I multiply by the number of digits w/o hard coding it?
  // num = num * num.length
} else {                  //if(num.length === 1)
//returns its multiplicative persistence
  console.log(`${number} Multiplicative Persistence is ${num}`)
}
console.log(number)
console.log(num)
}
persistence(36)

// function MultiplicativePersistence(num) {
//
//        function multiply(n){
//            return n.reduce(function(a,b){return a*b;});
//        }
//        var count =0;
//
//        while(num.toString().length > 1) {
//            num= num.toString().split("");
//            num = multiply(num);
//            count++;
//         }
//         return count;
//     }
//
// alert(MultiplicativePersistence("39"));
