https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}



Sum Mixed Array: https://www.codewars.com/kata/57eaeb9578748ff92a000009

function sumMix(x){
  return Number(x.reduce((a, b) => Number(a) + Number(b)));
}




Remove String Spaces: https://www.codewars.com/kata/57eae20f5500ad98e50002c5

function noSpace(x){
  let arr = x.split('')
  return arr.filter(char => char !== ' ').join('')

}


