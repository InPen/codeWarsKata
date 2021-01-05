//A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

//Return True if yes, False otherwise :)


// function hero(bullets, dragons){
//   return bullets >= dragons *2
// }
//hero(1500, 751)



const willHeSurvive = (dragons, bullets) => {
  if(bullets % 2 === 0 && bullets > dragons){
    console.log("He's gonna survive");
  } else {
    console.log("R.I.P");
  }
}
willHeSurvive(3, 1)
// P :bullets and dragons
// R : a string that says he survived or not 
// E : it takes 2 bullets to kill 1 dragon 
// P : if bullets % 2 === 0 && bullets > dragons / He'll survive