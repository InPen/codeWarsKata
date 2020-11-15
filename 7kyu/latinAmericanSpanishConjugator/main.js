//Write a function called conjugate which will return an object with a spanish verb conjugated. The object must look like this:
//{"comer": ["como","comes","come","comemos","coméis","comen"]}
//Where the key is the verb in its original form (infinitive form) and its value will be an array with the conjugations.
//SUDO
//-check if verb last 2 words end with ar || er || ir
//-make the verb an object that has an empty array as avalue
//-conjugate verb: change the last 2 letters && add values (conjugations) to array
//-return object w/ it's conjugated words *in order

//porpusly leaving out vosotros 'cause #decolonization boo~~

function conjugate(verb){
  let obj = {}
//access letters
  for(const letters of verb){
//check if verb last 2 words end with ar || er || ir
    if(verb.endsWith('er')){
      obj[verb] = [
        verb[0, - 2] + 'o',
        verb[0, - 2] + 'es',
        verb[0, - 1] + 'e',
        verb[0, - 2] + 'emos',
        verb[0, - 2] + 'en',
      ]
      return obj

    } else if(verb.endsWith('ar')){
      obj[verb] = [
        verb[0, - 2] + 'o',
        verb[0, - 2] + 'as',
        verb[0, - 1] + 'a',
        verb[0, - 2] + 'amos',
        verb[0, - 2] + 'an',
      ]
      return obj

    }else if(verb.endsWith('ir')){
      obj[verb] = [
        verb[0, - 2] + 'o',
        verb[0, - 2] + 'es',
        verb[0, - 1] + 'e',
        verb[0, - 2] + 'imos',
        verb[0, - 2] + 'en',
      ]

    }
    return obj
  }
}
conjugate('comer')
