//Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.
//Only numbers without decimals like 4 or 4.0 can be even.
//The input is a sequence of numbers: integers and/or floats.
//P: a list of nums aka an array
//R: return the sum of even values
//E: [2,1,55,48,3.6] // 50
//P: iterate through array and filter the even nums
  //use reduce to add them all up
  //return the sum

const sumEvenNums = input =>{
  return input.filter(nums => nums % 2 === 0).reduce((accum, currentValue) => accum + currentValue, 0)
}
