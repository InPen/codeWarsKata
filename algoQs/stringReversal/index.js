// Given a string of characters as input, write a function that returns it with the characters reversed.

// P : string of chars 
// R : return chars reversed
// E : "snooky" => "ykoons"
// P : reverse method 
//     split my string => Array
//     loop every index 
//     lastIndexOf() ?
//     push to new Array
//     join that Array to turn back as string 

const reverseString = string => {
    console.log(string.split('').reverse().join(''))
}
reverseString('I want a dvd')

const reverseString = string =>{
    string.split('')
    let reversed = []
    for(let i = string.length - 1; i >=0; i-- ){
        reversed.push(string[i])
    }
    console.log(reversed.join(''))
}
reverseString('Snooky')