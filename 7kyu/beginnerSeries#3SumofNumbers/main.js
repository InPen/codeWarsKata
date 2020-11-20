//Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

//Note: a and b are not ordered!

//SUDO:
//put numbers in order
//find numbers in between
//add all the numbers
//return the sum
//OR return one of the nums if they're the same


const getSum = (a, b) => {
  let min = Math.min(a,b)
      max = Math.max(a,b)
  return((max - min + 1) * (min + max) / 2)
}


console.log(getSum(-666, -33))
