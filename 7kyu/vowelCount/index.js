//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.

//P : a string
//R : return the total number of vowels in the string
//E : "paralelepipedo" //7 !
//P : turn string into arr
    //iterate trough arr to find all vowels
    //reduce total and return number

const totalVowels = string => {
  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length
}
console.log(totalVowels("PaRaLeLEpiPEDO"))
