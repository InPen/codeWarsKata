// https://www.codewars.com/kata/5966e33c4e686b508700002d
// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

// sumStr("4", "5")    // should output "9"

// P : 2 + string ints
// R : return the sum of the strings as a string
// E : "2" + "2" = "4"
// P : turn strings into ints
//     add
//     turn sum back into string 

const sumStr = (a,b) => {
    let intA = parseInt(a)
    let intB = parseInt(b)
    let sum = intA + intB

    return String(sum)
}
sumStr('10', '8')