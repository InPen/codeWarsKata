let numbers = "1 2 3 4 5"

function highAndLow(numbers){
//Create the sting into an array and replace the empty space with commas to create indexes
  let stringArr = (numbers.split(/[ ,]+/))
  console.log(stringArr) // [ '1', '2', '3', '4', '5' ]
//turn the strings into integers
  let numberArray = stringArr.map(el=>parseInt(el))
  console.log(numberArray) // [ 1, 2, 3, 4, 5 ]
// assign the lowest value to min
  let min = (Math.min(...numberArray))
  console.log(min) // log lowest num //1
// assign the highest value to max
  let max = (Math.max(...numberArray))
  console.log(max) //log highest num //5
//put max and min into a new array and return the highest first separated by a single space from the lowest
  //return ((max + min ) //.toString()) "5 1"

}
highAndLow(numbers)



const highAndLow = numbers =>{
  numbers
    .split('')
    .sort((a,b) => b-a)
    let max = Math.max(numbers)
    let min = Math.min(numbers)

}
