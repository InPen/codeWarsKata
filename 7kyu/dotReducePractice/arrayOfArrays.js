//Given an array of arrays, flatten them into a single array
function flatten(arr) {
   let conCated = [[0]].concat([[1]]).concat([[2]])
   return arrays.reduce(conCated)
}

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
