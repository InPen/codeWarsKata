// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'

function solution(str) {
  return str.split("").reverse().join("");
}


function solution(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let letter = str[i];
    reversed += letter;
    //     console.log(letter)
  }
  return reversed;
}