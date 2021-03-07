/**
 P : arr of num prices
 R : the max profit (num) // (what we payed for - what we sold it for)
 E : 0,1,4,8,0 buy : Day 1 for $0 sell : Day 4 for $8 (0-8) => 8
 P : check what day to buy from first day to second to last day
     check what day to sell after you find what day to buy 
 */
const maxProfit = function(prices) {
    
    let sortedPrices = prices.sort((a,b) => a-b)
    let cheapest = sortedPrices[0]
    let cheapestDay = prices.indexOf(cheapest)
    // console.log(cheapestDay)
    let expensive = sortedPrices[sortedPrices.length - 1]
    let expensiveDay = prices.indexOf(expensive)

    if(cheapestDay < expensiveDay){
        let maxProfit = expensive - cheapest
    }


    console.log(maxProfit)

    // for(let i = 0; i < prices.length - 1; i++){
    //     if(prices[i] < prices[i+1]){
    //         bestBuy = prices[i]
    //         console.log(bestBuy)
    //     }
    // }
    
}
maxProfit([0,1,4,8,0]) //[ 0, 0, 1, 4, 8 ]