//create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.
//(-12, 2, -6)  ->  true
//(-12, 2, -5)  ->  false
//(45, 1, 6)    ->  false
//(45, 5, 15)   ->  true

function isDivideBy(number, a, b) {
  if((number % a === 0) && (number % b === 0)){
    return true
  }else {
    return false
  }
}
