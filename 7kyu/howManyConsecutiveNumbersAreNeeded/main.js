//Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

//For example:
//If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

// sudo:
// put array in order
// ??check what numbers are mising to make it consecutive

function consecutive(arr) {
  let missing = []
  let orderedArr = arr.sort()
  for (let i = 0; i < orderedArr.length; i++){
    for (let j = 1; j < 100 ; j++ ){
      if(orderedArr[i] + j < orderedArr[i+1]) {
        missing.push(orderedArr[i] + j)
      }
    }
  }
  console.log(missing) //missing.length
}
consecutive([1, -11, 113])
