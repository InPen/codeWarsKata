/**
 P : arr of num prices
 R : the max profit (num) // (what we payed for - what we sold it for)
 E : 0,1,4,8,0 buy : Day 1 for $0 sell : Day 4 for $8 (0-8) => 8
 P : check what day to buy from first day to second to last day
     check what day to sell after you find what day to buy 
 */
const maxProfit = function(prices) {

    /**
 * @param {number[]} prices
 * @return {number}
 P : arr of num prices
 R : the max profit (num) // (what we payed for - what we sold it for)
 E : 0,1,4,8,0 buy : Day 1 for $0 sell : Day 4 for $8 (0-8) => 8
 P : check what day to buy from first day to second to last day
     check what day to sell after you find what day to buy 
 */
var maxProfit = function(prices) {
    
 let profitMargin = []
  for (let i = 0; i < prices.length; i++){
     for (let j = prices.length - 1; j >= 0; j--){ 
       let frontNum = prices[i]
       let backNum = prices[j]
       if(frontNum < backNum && j > i){
         profitMargin.push(backNum - frontNum)
      }
     }
  }
  if (profitMargin.length === 0) return 0
  return Math.max(...profitMargin)
    
    
// let unsorted = [...prices]
//     let sortedPrices = prices.sort((a,b) => a-b)
//     let cheapest = sortedPrices[0]
//     let cheapestDay = unsorted.indexOf(cheapest)
//     let expensive = sortedPrices[sortedPrices.length - 1]
//     let expensiveDay = unsorted.indexOf(expensive)
//     let tempExpensive = []
    
//     for(let i = unsorted.length - 1; i > cheapestDay; i--){
      
//         if(unsorted[i] > cheapest){
//           tempExpensive.push(unsorted[i])
//         }
//       }
  
//   tempExpensive.sort((a,b) => b-a)
//   expensive = tempExpensive[0]
//   if (!expensive){
//     return 0
//   }
//   return expensive - cheapest
    
}
maxProfit([0,1,4,8,0]) //[ 0, 0, 1, 4, 8 ]