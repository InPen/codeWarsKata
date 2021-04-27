// write a function to check if a string is a palindrome. return true if it is and false otherwise 

const palindromeChecker = str => {
    let strArr = str.replace(/[^a-zA-Z]/g, "").toLowerCase().split('').join('')
    let reversed = str.replace(/[^a-zA-Z]/g, "").toLowerCase().split('').reverse().join('')

    console.log(strArr)
    console.log(reversed)

    if(strArr == reversed){
        console.log(true)
    }else {
        console.log(false)
    }
}

palindromeChecker("A Man, A Plan, A Canal – Panama!");