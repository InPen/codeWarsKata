//Complete the solution so that it reverses the string passed into it.
//'world'  =>  'dlrow'
function stringReverse(string){
// divides the letters of the string and puts them in their own array index
  let split = string.split('')
//switches the order of the array
  let reverse = split.reverse()
//puts the letters back together as a string
  let reJoin = reverse.join('')

  console.log(reJoin);
  return reJoin

}
stringReverse('Paralelepipedo')
