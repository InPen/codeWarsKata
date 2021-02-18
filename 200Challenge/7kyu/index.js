Max-min arrays: https://www.codewars.com/kata/5a090c4e697598d0b9000004


function solve(arr){
    //..
  arr.sort((a,b) => a - b)
  let ans = [];
  
  
  while(arr.length >= 1){
    ans.push(arr.pop());
    if(arr.length > 0){
      ans.push(arr.shift())
    }
    
  }
  return ans
  
};


Minimize Sum Of Array: https://www.codewars.com/kata/5a523566b3bfa84c2e00010b


function minSum(arr) {
    arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < arr.length/2; i++) {
      const j = arr.length - 1 - i;
      sum += arr[i] * arr[j];
    }
  return sum;
}


Maximum Product: https://www.codewars.com/kata/5a4138acf28b82aa43000117

function adjacentElementsProduct(array) {
  let maxNum = Number.NEGATIVE_INFINITY
  let temp = 0
  for(let i = 0; i < array.length - 1; i++){
    temp = array[i] * array[i+1]
    if(temp >= maxNum){
      maxNum = temp
    }
  }
  return maxNum
}


Alphabet symmetry: https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0


function solve(arr){  
//code
  let map = 'abcdefghijklmnopqrstuvwxyz';
  let ans = [];
  let count = 0
  for(let i = 0; i < arr.length; i++){
    for(let j= 0; j < arr[i].length; j++){
      
      const char = arr[i][j].toLowerCase()
      if(char === map[j]){
        count++
      }
    }
    ans.push(count)
    count= 0
  }
  return ans
}


Even or Odd - Which is Greater?: https://www.codewars.com/kata/57f7b8271e3d9283300000b4


function evenOrOdd(str) {
  let evenSum = 0;
  let oddSum = 0;
  str.split("").forEach(n => {
    const int = Number(n);
    if (int % 2 === 1) {
      oddSum += int;
    }
    else {
      evenSum += int;
    }
  })
  if (evenSum === oddSum) return "Even and Odd are the same";
    
  return evenSum > oddSum ? "Even is greater than Odd" : "Odd is greater than Even";
}


Remove consecutive duplicate words: https://www.codewars.com/kata/5b39e91ee7a2c103300018b3


const removeConsecutiveDuplicates = s => {
  const arr = s.split(' ')
  let lastWord = [arr[0]]
  
  for(let i = 1; i < arr.length; i++){
    if(arr[i] !== arr[i-1]){
      lastWord.push(arr[i])
    }
  }
  return lastWord.join(' ')
}