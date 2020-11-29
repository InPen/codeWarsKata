//Turn an array of numbers into a total of all the numbers

function total(arr) {
   console.log(arr.reduce((accum, currentValue) => accum + currentValue))
}

console.log(total([1,2,3])); // 6
