//Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others.
//Bob observed that one number usually differs from the others in evenness.
//Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
//indexes of the elements start from 1 (not 0)
//**
numbers = [1,1,2,1]
// function iqTest(number){
// //is it even
//   if(number %2 === 0){
// //whats its index
//     console.log('is even')
//   } else {
//     console.log('is odd')
//   }
//
// }
// iqTest([1,1,2,1])


for (const number of numbers) {
  console.log(number)
  if(number %2 === 0){
     console.log('is even')
     // console.log(numbers.findIndex(number))
   } else {
     console.log('is odd')
   }
}
