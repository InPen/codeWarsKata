
//Counting sheep...
//Consider an array/list of sheep where some sheep may be missing from their place.
//We need a function that counts the number of sheep present in the array (true means present).

// let listOfSheep = [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// P : an arr of sheep
// R : number of sheep present 
// E : [true,  true,  true,  false] => 3
// P : iterate trough arr 
//     reduce to only keep true velues
//     return the total of true values

const sheepCounter = arr => {
  arr.filter(value => value == true).reduce((accum, currentVal) => accum + currentVal, 0)
}
sheepCounter([true,  true,  true,  false,
true,  true,  true,  true ,
true,  false, true,  false,
true,  false, false, true ,
true,  true,  true,  true ,
false, false, true,  true])





  

// listOfSheep.forEach(function(sheep) {
// //iterate though the array and find only the truthy values
//   if (sheep === true) {
//     let sheepCount = []
//     sheepCount.push(listOfSheep.filter(Boolean).length)
//     console.log(`There's only ${sheepCount} sheep present`)

//   }
// })
