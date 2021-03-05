// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.


P :positive number
R :single digit (multiplicative persistence)
E : persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
                       //WE RETURN 3 BECAUSE WE HAD TO * 3 TIMES 
P : turn num into String
    










//Write a function, persistence, that takes in a positive parameter num
//turn number into a string so we can check how many digits it has
//how many times must you multiply the digits in num until you reach a single digit.
//multiply all digits of num
//returns its multiplicative persistence



// function persistence(number) {
// let num = '' + number
// if(num.length > 1){
//   num *(num.split(""))
//   // num = num * num.length
// } else {                  //if(num.length === 1)
//   console.log(`${number} Multiplicative Persistence is ${num}`)
// }
// console.log(number)
// console.log(num)
// }
// persistence(36)

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
