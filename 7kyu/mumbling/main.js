//Examples:
//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt"

//sudo
//capitalize every letter
//duplicate in lower case each letter

function accum(s) {
//declare an empty arr where we can begin to store our new values
  let sArr = []
//in this first loop iterate through the indexes of s
  for(let i = 0; i < s.length; i++){
//?make every iteration a string
    let response = ''
//in this second loop we are checking if our second counter is less or equal to our first counter 'i'
    for(let m = 0; m <= i; m++){
//it's our first iteration, capitalize response, push it to our sArr and check the second count again
      if(m === 0){
        response = s[i].toUpperCase()
//if it's not our first iteration then lower case the latter push it to our sArr and check the second count again
      } else {
        response = s[i].toLowerCase()
      }
      sArr.push(response)
    }
//when i > s.length stop the parent loop and return the sArr with each index separated by -
    console.log(sArr.join('-'))
    // return sArr.join('-')
  }
}
accum("abcd")
