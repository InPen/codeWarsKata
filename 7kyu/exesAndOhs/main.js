//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//SUDO
//acccess string
//check if string has X
//count number of x and save to a variable
//check if string has O
//count number of O's and save to variable
//compare x and o variable to see if they have the same amount
//return true || false

const xAndO = 'oxxo'

function xO(str) {
//make case insensitive
  let string = str.toLowerCase()
//acccess string
  for(const letter of string){
//count number of x and save to a variable
    if string.includes('x'){
    console.log(string)
    }
  }
}

XO(xAndO)
