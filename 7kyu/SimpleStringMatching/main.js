//You will be given two strings a and b consisting of lower case letters, but a will have at most one asterix character. The asterix (if any) can be replaced with an arbitrary sequence (possibly empty) of lowercase letters. No other character of string a can be replaced. If it is possible to replace the asterix in a to obtain string b, then string b matches the pattern.

let blue = "aaa"
let apple = "aa*"

function solve(a,b){
  for (let i = 0; i < b.length; i++){
    if(a[i] === b[i]) {
      console.log(true)
    }else {
      let newA = a.replace("*", "a")
      console.log(newA)
      if(newA === b){
        return true
      }
    }
  }
}
solve(apple,blue)
