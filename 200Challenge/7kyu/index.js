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
Maximum Product: https://www.codewars.com/kata/5a4138acf28b82aa43000117
Alphabet symmetry: https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0
Even or Odd - Which is Greater?: https://www.codewars.com/kata/57f7b8271e3d9283300000b4
Remove consecutive duplicate words: https://www.codewars.com/kata/5b39e91ee7a2c103300018b3