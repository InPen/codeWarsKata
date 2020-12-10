//given an arr of integers as strings and nums
//return the sum of values as if they were all nums
//example : ['2',3,'5'] => 10
// P : integer values as nums or strings
// R : return the total sum of all num and string nums
// E : [18, '7', 36, '1'] //62
// P : iterate through arr
//     turn strings into nums
//     use reduce() to return the sum


const sumOfNums = arr => {
  return arr.reduce((accum, currentValue) => accum + Number(currentValue), 0)
}
console.log(sumOfNums([18, '7', 36, '1'])) //10
