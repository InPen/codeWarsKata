// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// 

function findOdd(A) {
  //happy coding!

  for (let i = 0; i <= A.length - 1; i += 1) {
    let elmLength = A.filter((elm) => elm === A[i]).length;

    if (elmLength % 2 !== 0) {
      return A[i];
    }
  }
}