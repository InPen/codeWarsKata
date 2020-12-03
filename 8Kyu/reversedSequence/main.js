//build a function that returns an arr of nums
//from n to 1 where n > 0
//P : n
//R : [nums]
//E : [18, 12, 14, 9] [9.99, 3]
//P : declare a function
//function takes a number
//creates an array based of n
//the numbers that are created n > 0

function reverseSeq(n){
//n is an elelement of the arr thats why it's in that syntax
//ES6 uses Array word to turn any data type into an array
//map will loop through our array and create a new array populated w/ new values
  [...Array(n)].map((x,i) => n - 1)
}
