//Task: to find the 1st non consecutive number
//find the 1st element in the array  that is NOT consecutive
//if whole array is consecutive return null
//at least 2 elelemnts /// all #

//sudo
//find num that breaks sequence
//num + 1

function consecutiveNum(arr){
  let result = 0
  for (let i = 0; i < arr.length - 1; i++) {
//i want to check that the next elelement is not greater than just by 1
    if (arr[i] + 1 !== arr[i+1]){
      result = arr[i+1]
      break
    }
  }
  if (result === 0) {
    return null
  } else {
    return result
  }
}
consecutiveNum([1,2,3,4,6,7,8])

//Parameter Return Example PsudoCode
