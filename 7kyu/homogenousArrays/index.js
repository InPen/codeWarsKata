// https://www.codewars.com/kata/57ef016a7b45ef647a00002d

// Given a two-dimensional array, return a new array which carries over only those arrays from the original, which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.

// Example:

// Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]
// your function should return [[1, 5, 4], ['b']]

// P : a multi dimentional arr
// R : an arr with only values that are the same
// E : [[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []]
//     [[123, 234, 432], ['', 'abc'], [''], ['', '1']]
// P : arrays[1] //access indexes
//     sort arrs by typeof()
//     remove arrs that don't have the same type

const filterHomogenous = arrays => {
    let filtered = []
    for(let array in arrays){
        if(typeof(arrays[i] === Number)){
            filtered.push(arrays[i])
        } else if(typeof(arrays[i] === String)){
            filtered.push(arrays[i])
        }
    }
    return filtered
}