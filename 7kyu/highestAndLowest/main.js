// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"



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