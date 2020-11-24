//You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.
//You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

//C.....m returns 'Escaped!' <-- more than three characters between

//C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

function catMouse(x){
  let index = x.indexOf('C', 0)
  console.log(index)
  if (x[(index + 4)] === '.'){
    console.log("Escaped!")
  }else {
    console.log("Caught!")
  }

  }
catMouse('')
