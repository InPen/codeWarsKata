// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// P : an arr of string and nums 
// R : returning the sum of all nums and string nums 
// E : [1,'1',1,'1'] => 4
// P : turn our strings into nums 
//     add all nums 
//     return the total 

const sumMix = arr => {
    Number(arr.reduce((accum, current) => Number(accum) + Number(current), 0))
}
sumMix([1,'1',1,'1'])

