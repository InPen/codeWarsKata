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
//I should compare 'suspectInfo' arrays to 'dead' array and return the
//array who has all the values of dead array
  if(suspectInfo.james === dead) && || if(suspectInfo.johnny === dead) &&|| if(suspectInfo.peter === dead) {
    console.log('you killer')
  }
}
killer()
