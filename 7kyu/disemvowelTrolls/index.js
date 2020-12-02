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
//declare vowels
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
//declare empty string were we'll save the new letters from our loop
  let unTrolledStr = ''
//loop through string and target vowels using chartAt()
  for(let i = 0; i < str.length; i++){
      let findVowel = str.chartAt(i)
      if(vowels.indexOf(findVowel) == -1){
        unTrolledStr = unTrolledStr + findVowel
      }
    }
    console.log(unTrolledStr)
}
disemvowel("This website is for losers LOL!")
