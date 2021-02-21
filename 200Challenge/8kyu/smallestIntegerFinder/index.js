// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// P : an arr of ints 
// R : returning the smallest int 
// E : [10,18,55,2,46] => 2
// P : i want to order my arr in order to find the smallest int 
//     retun the smallest 


const findSamllestInt = arr => {
    arr.sort((a,b) => a-b)
    return arr[0]
}

const findSamllestInt = arr => {
    return Math.min(...arr)
}