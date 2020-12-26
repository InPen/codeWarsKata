//create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

//The input to the function will be an array of three distinct numbers (Haskell: a tuple).

//For example:

//gimme([2, 3, 1]) => 0

//P : an Array of nums 
//R : retun the index of the number that lies in the middle of the other 2 elements 
//E : gimme([5,10,14]) => 10 || 1
//P : iterate through arr / CANT USE SORT BC WE NEED TO KEEP THE ORIGINAL        INDEX ORDER / indexOf() the number in between
 
// const gimme = arr => {
//     let index = 0
//     let max = Math.max(...arr)
//     let min = Math.min(...arr)
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== max && arr[i] !== min){
//             index = i
//         }
//     }
//     console.log(index)
// }
// gimme([5, 10, 14]) 



const gimme = inputArray => {
  return inputArray.indexOf(inputArray.slice(0).sort(function(a,b) { return a-b; })[1]);
}
gimme([8,7,5])