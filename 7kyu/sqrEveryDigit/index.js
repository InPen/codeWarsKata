function squareDigits(num) {
  let nums = num.toString().split("");
  let sqrArr = [];

  for (let i = 0; i < nums.length; i++) {
    sqrArr.push(nums[i] * nums[i]);
  }
  return Number(sqrArr.join(""));
}

