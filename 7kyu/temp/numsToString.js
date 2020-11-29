//Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr) {
   let result = (a, b) => a.toString().concat(b.toString());
   return arr.reduce(result);
}

console.log(stringConcat([1,2,3])); // "123"
