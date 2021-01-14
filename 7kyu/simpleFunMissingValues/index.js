// You are given an array of positive ints where every element appears three times, except one that appears only once (let's call it x) and one that appears only twice (let's call it y).

// Your task is to find x * x * y.

// Example
// For arr=[1, 1, 1, 2, 2, 3], the result should be 18

// 3 x 3 x 2 = 18

// el 1 = x
// el 2 = y

// P : arr of + nums 
// R : return the product of x*x*y
// E : [8,12,8,12,8,4] / 4 * 4 * 12 // [4,8,8,8,12,12]
// P : sort arr 
//     compare
//     indexes 

function missingValues(arr) {
  let y = 0
  let x = 0

  arr.sort((a,b) => a-b)
  for(let i = 0; i < arr.length; i++){
      if(arr[i] !== arr[i-1] && arr[i] !== arr[i+1]){
        x = arr[i]
        console.log(x);
        
    }else if(arr[i] !== arr[i-1] && arr[i] === arr[i+1] && arr[i] !== arr[i+2]){
        y = arr[i]
        console.log(y)
    }
  }
  return x*x*y 
}
missingValues([8,12,8,12,8,4])