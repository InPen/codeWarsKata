// Given an array of integers your solution should find the smallest integer.
//
// For example:
//
// Given [34, 15, 88, 2] your solution will return 2
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

let array = [34, -345, -1, 100]
const min = Math.min(...array)
console.log(`The smallest digit in your array is ${min}`)
