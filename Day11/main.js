//A child is playing with a ball on the nth floor of a tall building. //The height of this floor, h, is known.

//He drops the ball out of the window. The ball bounces (for example), //to two-thirds of its height (a bounce of 0.66).

//His mother looks out of a window 1.5 meters from the ground.

//How many times will the mother see the ball pass in front of her //window (including when it's falling and bouncing?


function bouncingBall(h,  bounce,  window) {
 let h
 let bounce = 0.66
 let window = 1.5

//Float parameter "h" in meters must be greater than 0
  h > 0
//Float parameter "bounce" must be greater than 0 and less than 1
bounce < 1
//Float parameter "window" must be less than h.
window < h
}
