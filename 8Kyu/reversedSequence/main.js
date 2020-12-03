//build a function that returns an arr of nums
//from n to 1 where n > 0
//P : n
//R : [nums]
//E : n = 8 [8,7,6,5,4,3,2,1]
//P : declare a function
//function takes a number
//creates an array based of n
//the numbers that are created n > 0

function reverseSeq(n){
  let arr = []

  for(let i = n; i >= 1; i--){
    arr.push(i)
  }
  return arr
}
console.log(reverseSeq(8))
