//Given a number , Return _The Maximum number _ could be formed from the digits of the number given .
//maxNumber (213) ==> return (321)

function maxNumber(n) {
//turn n into a string
  let nString = n.toString()
//turn string into array
  let arr = nString.split('')
//sort numbers from highest to lowest
  arr.sort((a,b) => b - a)
//turn array back into a number
  const response = arr.join('')
   console.log(parseInt(response))
}
maxNumber(195847)
