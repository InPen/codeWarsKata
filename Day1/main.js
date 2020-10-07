
//Counting sheep...
//Consider an array/list of sheep where some sheep may be missing from their place.
//We need a function that counts the number of sheep present in the array (true means present).

let listOfSheep = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]


listOfSheep.forEach(function(sheep) {
//iterate though the array and find only the truthy values
  if (sheep === true) {
//create an array of only truethy values
    presentSheep = listOfSheep.map(sheep => {
      return(sheep === true)
    })
    console.log(presentSheep)
  }
});
