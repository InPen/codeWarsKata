// A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.

// P : a string 
// R : return true or false if string is palindrome or not
// E : "bananas" => false // "anna" => true
// P : i can check first and last indexes and if they match is a palyndrome 
//     turn my string into arr

const palindromeChecker = string =>{
    string.toLowerCase()
    let arrStr = string.toLowerCase().split('').reverse().join('')
    if(string === arrStr){
        console.log(true);
    }else {
        console.log(false);
    }
}
palindromeChecker('Anna')
