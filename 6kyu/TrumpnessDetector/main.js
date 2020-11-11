//create a function to detect the original and unique rythm of our beloved leader, typically having a lot of extra vowels, all ready to fight the estabilishment.

//The index is calculated based on how many vowels are repeated more than once in a row and dividing them by the total number of vowels a petty enemy of America would use.

//Notes: vowels are only the ones in the patriotic group of "aeiou": "y" should go back to Greece if she thinks she can have the same rights of true American vowels; there is always going to be at least a vowel, as silence is the option of coward Kenyan/terrorist presidents and their friends.

//Round each result by two decimal digits: there is no place for small fry in Trump's America.

const trumpySpeech = "MEXICAAAAAAAANS GOOOO HOOOMEEEE"
let vowels = 'aeiou'


//count the vowels
function trumpDetector(trumpySpeech){
  let count = 0
//for every letter in trumpySpeech we increment our count if a vowel exist
  for(let i = 0; i < trumpySpeech.length; i++) {
    if (trumpySpeech[i] === 'vowels') {
      count++
    }
  }
  return count
}

//find the word with the most vowels
function getMostVowels(vowels){
  let trumpiest = ''
  for(let i = 0; i < vowels.length, i++) {
    if(countVowels(trumpySpeech[i]) > countVowels(vowels)) {
      vowels = Math.round(trumpySpeech[i] * 1000)/1000
    }
  }
  return trumpiest
}
