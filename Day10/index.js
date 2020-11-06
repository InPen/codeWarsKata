//Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

//If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

//If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

//If the total of both even and odd numbers are identical return: "Even and Odd are the same"

const  str = '275654901347915678'

function evenOrOdd(str) {
  let eachNum = str.split('')
  eachNum = eachNum.map(function(element){
    return parseInt(element)
  })
  let evenSum = 0
  let oddSum = 0
  console.log(eachNum)
  eachNum.forEach(function(i){
    if(i %2 === 0){
      evenSum = (evenSum + i)

    }else{
      oddSum +=i

    }
  })
  if(evenSum > oddSum){
    return "Even is greater than Odd"
  } else if(evenSum < oddSum){
    return "Odd is greater than Even"
  } else {
    return "Even and Odd are the same"
  }
}
evenOrOdd(str)
