// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

const reverseString = str => {
    return [...str].reverse().join(' ')
}
reverseString('paralelepipedo')


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

const isPalindrome = str => {
    let reverseStr = str.split('').reverse().join('')
    console.log(reverseStr);
    if(str === reverseStr){
        console.log(true);
    }else {
        console.log(false);
    }
}
isPalindrome('racecar')


// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

const reverseInt = int => {
    let reversed = int.toString().split('').reverse().join('')
    return Number(reversed)
} 
reverseInt(987)


// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

const capitalizeLetters = str => {
    return str
        .toLowercase()
        .split(' ')
        .map(word => word[0].toUpperCase + word.substring(1))
        .join(' ')
}
capitalizeLetters("i love my husband")


// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

// const maxCharacter = str => {

// }
// maxCharacter('paralelepipedo')

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", 
//for multiples of 5 print "Buzz". 
//For numbers which are multiples of both 3 and 5, print "FizzBuzz".

const fizzBuzz = num => {
    for(let i = 0; i <= num; i ++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }else if(i % 3 === 0);{
            console.log("Fizz");
        }else if(i % 5 === 0);{
            console.log("Buzz");
        }else {
            console.log(i)
        }
    }
}
fizzBuzz(55)