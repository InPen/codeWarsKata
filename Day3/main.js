//Given two integers a and b, which can be positive or negative,
//find the sum of all the numbers between including them too and return it.
//If the two numbers are equal return a or b.
function findSum(a,b){
  let fullArr = []
// push a & b into arr so we can compare them and find the numbers in between
  let arr = []
  arr.push(a , b)
  console.log(arr)
//The sum variable is what will hold the sum of all the numbers from fullArr.
  let sum = 0
//We will get the sum by using the reduce() method.
//The reducer function is the function the reduce method will call to sum up the total of all the numbers from fullArr.
  const reducer = (accumulator, currentValue) => accumulator + currentValue
// Even though our array input only has two numbers, it won’t always come sorted from smallest to largest. We sort the array just in case.
  arr.sort(function(a, b) {
    return a - b
  })
// This will take all the numbers from arr[0] to arr[1] and pushes them into fullArr array
  for (let i = arr[0]; i <= arr[1]; i++) {
      fullArr.push(i)
  }
//use the reduce() method with our reducer function to sum up all the numbers in the fullArr array.
// assign that sum to our sum variable.
  sum = fullArr.reduce(reducer)

// if a && b === a && b don't add just return a || b
  if(arr[0] === arr[1] && arr[1] === arr[0]) {
    return arr[0]
  } else {
    return sum
  }
}
findSum(222,222)
