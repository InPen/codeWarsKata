//A child is playing with a ball on the nth floor of a tall building. //The height of this floor, h, is known.

//He drops the ball out of the window. The ball bounces (for example), //to two-thirds of its height (a bounce of 0.66).

//His mother looks out of a window 1.5 meters from the ground.

//How many times will the mother see the ball pass in front of her //window (including when it's falling and bouncing?



function bouncingBall(h,  bounce,  window) {
  let window = 1.5
  let bounce = 0.66
//we need to retun -1 if condition is not met
  let robounds = -1
//"bounce" must be greater than 0 and less than 1
  if(bounce > 0 && bounce < 1)
//"h" in meters must be greater than 0 && "window" must be less than h
  while (h > window) {
    rebounds+=2, h *=bounce;
    return rebounds
  }
}
