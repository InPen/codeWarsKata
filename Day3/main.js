//Given two integers a and b, which can be positive or negative,
//find the sum of all the numbers between including them too and return it.
//If the two numbers are equal return a or b.
function findSum(a,b){
  let fullArr = []
// push a & b into fullArr
  fullArr.push(a , b)
  console.log(fullArr)
  // if a && b === a && b don't add just return a || b
  //find the sum of all the numbers between including them too and return it.
}
findSum(2,4)
// function sumAll(arr) {
//
//     let fullArr = []
//     let sum = 0
//     const reducer = (accumulator, currentValue) => accumulator + currentValue
//
//     arr.sort(function(a, b) {
//         return a - b
//     })
//
//     for (let i = arr[0]; i <= arr[1]; i++) {
//         fullArr.push(i)
//     }
//
//     sum = fullArr.reduce(reducer)
//
//     return sum
// }
