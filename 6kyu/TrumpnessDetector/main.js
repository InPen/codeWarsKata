//create a function to detect the original and unique rythm of our beloved leader, typically having a lot of extra vowels, all ready to fight the estabilishment.

//The index is calculated based on how many vowels are repeated more than once in a row and dividing them by the total number of vowels a petty enemy of America would use.

//Notes: vowels are only the ones in the patriotic group of "aeiou": "y" should go back to Greece if she thinks she can have the same rights of true American vowels; there is always going to be at least a vowel, as silence is the option of coward Kenyan/terrorist presidents and their friends.

//Round each result by two decimal digits: there is no place for small fry in Trump's America.

const mexicans = "MEXICAAAAAAAANS GOOOO HOOOMEEEE"


// 2 totals which we will late divide and round to 2 decimals
// 1st total: Count repeats of vowels when they are in a row (not including the vowel itself)
// ---> check that is repeats
// ---> check that it is a vowel
// ----------> if (repeat and vowel)
// ----------> then save number of repeats - 1
// 2nd total: Count vowels a normal personal would use in the sentence
// ---> loop through string again
// ---> check if index is vowel
// ---> check if vowel repeats, keep checking until it stops
// ---> when stop repeating, add += total

function trumpDetector(trumpySpeech){
  let vowelArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let extraVowelsCount = 0
  let regularPeopleVowelsCount = 0
  let firstLetter = ""
  let secondLetter = ""
  for (let i = 0; i < trumpySpeech.length; i++) {
    // reassigning here
    secondLetter = trumpySpeech[i]
    // check if letter repeats
    if (secondLetter == firstLetter){
      // check if letter is vowel
      for (let j = 0; j < vowelArray.length; j++) {
        if (secondLetter == vowelArray[j]) {
          // vowel match!
          // check for how many extra vowels

        }
      }
    }
    firstLetter = secondLetter
  }
}

trumpDetector(mexicans)


// //count the vowels
// function trumpDetector(trumpySpeech){
//   let count = 0
// //for every letter in trumpySpeech we increment our count if a vowel exist
//   for(let i = 0; i < trumpySpeech.length; i++) {
//     if (trumpySpeech[i] === vowels) {
//       count++
//     }
//   }
//   return count
// }
//
// //find the word with the most vowels
// function getMostVowels(vowels){
//   let trumpiest = ''
//   for(let i = 0; i < vowels.length, i++) {
//     if(countVowels(trumpySpeech[i]) > countVowels(vowels)) {
//       vowels = Math.round(trumpySpeech[i] * 1000)/1000
//     }
//   }
//   return trumpiest
// }
