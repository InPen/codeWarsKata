const highestToLowest = numbers => {
  let numArr = numbers.split('').sort((a,b) => b-a)
  return numArr[numArr.length - 1] + " " + numArr[0]
}
