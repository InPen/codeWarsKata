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
//access keys inside 'suspectInfo' object
  for(let suspect in suspectInfo){
//set counter for the loop
    let count = 0
//access values inside 'dead' array
    for(let muerto of dead){
      if(!suspectInfo[key].includes(muerto))
      continue
      count++
    }
    if(count === dead.length)
    console.log(key)
  }
}
