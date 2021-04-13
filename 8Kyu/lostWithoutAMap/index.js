// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]


function maps(x) {
  return x.map((num) => num * 2);
}

function maps(x) {
  let doubledArr = [];
  for (let i = 0; i < x.length; i++) {
    let doubled = x[i] * 2;
    doubledArr.push(doubled);
  }
  return doubledArr;
}