// You get an array of numbers, return the sum of all of the positives ones.

// P : arr of nums
// R : the sum of all + ints || 0
// E : [0,4,-3,10] => 14 
// P : filter arr
//     sum + ints
//     create a conditional for null or - ints

const positiveSum = arr => {
    return arr.filter(nums => nums > 0).reduce((accum, current) => accum + current, 0)
} 

positiveSum([0,4,-3,10])