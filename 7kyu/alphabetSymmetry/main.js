//Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

//Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

let arr = "abode"
function solve(arr){

  
  let alphabetArr = arr.map(alphabetIndex => {
    return alphabetIndex
  })
//iterate through array starting at 1
    for(i = 1; i < arr.length; i++)
    console.log(i)
}
solve(arr)