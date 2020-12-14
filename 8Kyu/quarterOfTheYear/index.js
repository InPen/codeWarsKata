//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

//For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// P : a month as an integer / real whole number
// R : the quarter of the year the month is on
// E : so the month october would be represented as 10 and I would return 4
//     since it's on the 4th quarter of the year
// P : declare the cuarters of the month // THIS MIGHT GET COMPLICATED SINCE WE WANT TO RETURN
//     A NUMBER
//     create a conditional that checks what quarter the num we receive is on

//123 = 1st
//456 = 2nd
//789 = 3rd
//101112 = 4th

const quarterOf = (month) => {
  if(month <= 3){
    return 1
  } else if (month > 3 && month <= 6) {
    return 2
  }else if (month > 6 && month <= 9) {
    return 3
  } else{
    return 4
  }
}
quarterOf(8)
