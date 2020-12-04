//Given an arr of ints w/ negative and positivie values
//EXEPT for 1 integer that's either negative or positive

//P : an arr of both negative & positive vals
//R : [6,9,-6,-9,10] // 10
//E : //[2,-2,6,-3,3] //6
//P : function that takes an arr
//conditional to check for type
//try to implement reduce since it'll allow me to itterate trough my arr and retun a single value

const thirdWheel = arr => {
  let response = arr.filter(num => !arr.includes(num * -1))
  console.log(response[0])
}
thirdWheel([2,-2,6,-3,3])
