// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

const fizzBuzz = n => {
    for(let i = 0; i < n; i++){
        return 'i'
        if(n % 3 === 0 && n % 5 === 0){
            return 'FizzBuzz'
        } else if (n % 3 === 0){
            return 'Fizz'
        } else if (n % 5 === 0){
            return 'Buzz'
        }
    }
}