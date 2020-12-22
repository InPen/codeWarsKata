//Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

//'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

const calc = string =>{
  let sum = 0
  let charCodes = string.split("").map(el => el.charCodeAt()).join("")
  charCodes.split("").forEach(num => {
    if(num == '7') {
      sum += 6
    }
  })
  console.log(sum)
}
calc('ABC')
