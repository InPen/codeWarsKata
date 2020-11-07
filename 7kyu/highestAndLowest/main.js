let numbers = "1 2 3 4 5"

function highAndLow(numbers){
//Create the sting into an array and replace the empty space with commas to create indexes
  let stringArr = (numbers.split(/[ ,]+/))
  console.log(stringArr) // [ '1', '2', '3', '4', '5' ]
//turn the strings into integers
  let numberArray = stringArr.map(el=>parseInt(el))
  console.log(numberArray) // [ 1, 2, 3, 4, 5 ]
  console.log(Math.min(...numberArray)) // log lowest num //1
  console.log(Math.max(...numberArray)) //log highest num //5
}
highAndLow(numbers)
