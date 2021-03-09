Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

P : arr of ints 
R : return int that doesn't repeat 
E : [1,3,3,1,5] =>
P : 


const singleNumber = nums => {
    nums.sort((a,b) => a-b)
    console.log(nums)
    for(let i = 0; i < nums.length; i++){
      if(nums[i-1] !== nums[i] && nums[i] !== nums[i+1]){
          return nums[i]
      }
  }
}