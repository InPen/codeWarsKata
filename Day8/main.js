// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!
//Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
const friends = ['Heba', 'Johann', 'Celia', 'Maria', 'Jess',  'Ryan', 'Leon']

function friend(friends) {
  return friends.filter(i => i.length === 4)
}

console.log(friend())
// friends.forEach(element => if(element.length < 4){console.log(element)})

// friends.forEach = friend(string){
//   if(string.length < 4){
//     console.log(string)
//   }
// }





// if(friends === stringLength){
//   console.log(`${friends} is my friend`)
// } else if(friends !== stringLength){
//   console.log(`${friends} is a fake poser`)
// }
