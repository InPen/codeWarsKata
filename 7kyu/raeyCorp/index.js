//create a function that takes a list of non negative integers & strings
//return a new list with strings filtered out
//P = positive nums & strings
//R = return a new arr w/ only nums
//E = [18, 'snooky', 6.78, "hola"]  [1,2,"a","b"]
//P = //to iterate through the arr in order to check every index
//see if the index is a num or a string
//if its a number I want to save it in a new arr
//if its a string I want discard it

function findNums(arr){
  return arr.filter(number => typeof number === 'number')
}
findNums([1,2,"a","b"]) //[1,2]
