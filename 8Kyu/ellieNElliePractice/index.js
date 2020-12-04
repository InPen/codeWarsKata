// arr of nums where a true nums occrs once N the rest occur twice
// return sum of nums that occur **only once**
// [4,5,7,5,4,8] //15
// P : an arr nums ALL nums are positive nums
// R : the sum of the NUMS THAT ONLY APPEAR ONCE
// E : [7,8,90,1,7,8] // 91
// P : (arr) =>
// filter method to filter out the repeats
// reduce to return the sum that only appear once

const trueSum = arr => {
  let response = arr.filter((num, i, arr) => arr.indexOf(num) === arr.lastIndexOf(num)).reduce((accum, currentValue) => accum + currentValue, 0)
  console.log(response)
}
trueSum([7,8,90,1,7,8]) //91
