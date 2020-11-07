let numbers = "1 2 3 4 5"

function highAndLow(numbers){
  // arr = (numbers.split(/[ ,]+/).join(','))
  let stringArr = (numbers.split(/[ ,]+/))
  console.log(stringArr)
  let numberArray = stringArr.map(el=>parseInt(el))
  console.log(numberArray)
  return(Math.min(...numberArray && Math.max(...numberArray))) //Math.max(...numberArray)
}
highAndLow(numbers)
