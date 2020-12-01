//Your task is to write a function that takes a string and return a new string with all vowels removed.

//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

//Note: for this kata y isn't considered a vowel.

//Parameter : string
//Return : string with no vowels
//Example :  "Ths wbst s fr lsrs LL!"
//Psudo :
//make everything lower case
//loop through string
//check for vowels
//remove vowels
//turn array into string

function disemvowel(str) {
  str.toLowerCase().split()
  for(const letter of str){
    console.log(letter);
  }
}
disemvowel("This website is for losers LOL!")
