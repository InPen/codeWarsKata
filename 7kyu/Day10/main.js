//Some people have been killed!
//You have managed to narrow the suspects down to just a few. Luckily, //you know every person who those suspects have seen on the day of the //murders.

//Task:
//Given a dictionary with all the names of the suspects and everyone //that they have seen on that day which may look like this:
//return the name of the one killer, in our case 'James' because he is //the only person that saw both 'Lucas' and 'Bill'

const suspectInfo = {james: ['Jacob', 'Bill', 'Lucas'],
                      johnny: ['David', 'Kyle', 'Lucas'],
                      peter: ['Lucy', 'Kyle']}
const dead = ['Lucas', 'Bill']

function killer(suspectInfo, dead) {
  let killer = ''
  console.log('hi',Object.keys(suspectInfo))
//access the key values in my `suspectInfo` object
  Object.keys(suspectInfo).forEach(function(person){
//for every person that is a suspect...
    console.log(person);
.find
.includes
  })
  // return
}
killer(suspectInfo, dead)


// function killer(suspectInfo, dead) {
//   let killer =''
// //access the keys inside suspectInfo and for each key begin this loop..
//   Object.keys(suspectInfo).forEach(function(key){
//     let count = 0
// //compare the dead inside the dead array
//     for(const death in dead){
// //if the items in the keys of suspect info have items in the dead array
//       if(suspectInfo[key].includes(dead[death])){
// //continue to iterate
//         count+= 1
//       }
//     }
// //if the count matched the length of the dead array then the killer is the one who's values match the dead array items
//       if(count == dead.length){
//         killer = key
//         console.log(key)
//       }
//   })
//   return killer
// }
// console.log(killer())
