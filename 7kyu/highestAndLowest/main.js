const highestToLowest = numbers => {
  let numArr = numbers.split('').sort((a,b) => b-a)
  return numArr[numArr.length - 1] + " " + numArr[0]
}



//

function highAndLow(numbers){
  let numArr = numbers.split('').sort((a,b) => b-a)
  return Math.max(numArr) + " " + Math.min(numArr)

}


//

function highAndLow(numbers) {
  let numArr = numbers.split(" ").map((num) => Number(num));

  let max = Math.max(...numArr);
  console.log(max);
  let min = Math.min(...numArr);
  console.log(min);

  return `${max} ${min}`;
}