// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

function digitize(n) {
  let digits = n.toString().split("");
  let realDigits = digits.map(Number);

  return realDigits.reverse();
}