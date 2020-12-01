//sudo:
//conditional to make sure we get a 4 digit year
//implement Set to make sure digits don't repeat
//year ++ adding all nums in year to Set so it can keep iterating until we get our 4
//"2""0""1""8" 2018 = toString().split('')

function nextHappyYear(year){
  let set = new Set
  for (let i = year + 1; i < (year + 1000); i++){
    let arr = i.toString().split('')
    set = new Set
    arr.forEach(element => set.add(element))
    if (set.size === 4){
      break
    }
  }
  let happyYear = Number([...set].join(''))
  return happyYear

}
nextHappyYear(2012)
