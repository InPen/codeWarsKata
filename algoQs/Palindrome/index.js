// A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.

// P : a string 
// R : return true or false if string is palindrome or not
// E : "bananas" => false // "anna" => true
// P : i can check first and last indexes and if they match is a palyndrome 
//     turn my string into arr

// const palindromeChecker = string =>{
//     string.toLowerCase()
//     console.log(string == string.split('').reverse().join(''))
// }
// palindromeChecker('Racecar')


var summation = function (num) {
    console.log(num);
    if(num){
        console.log('next summation ' + `${num-1}`)
        const numTrue = num + summation(num - 1)
        console.log(numTrue); 
        return numTrue
    } else {
        console.log('stop condition');
        console.log(num);
        return num
    }
}
summation(3)