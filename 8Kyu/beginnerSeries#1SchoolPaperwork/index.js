//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

//Your task is to calculate how many blank pages do you need

//P : classmates = n && pages = m
//R : how many pages do i need
//E : paperwork(5, 5) == 25
//P: I need the same amount of pages as there are class classmates
  //so if I have 12 class mates, I need 12 pages
  //then, based on the example, I multiply 12 * 12 and my answear is the result

const paperwork = (classmates, pages) => {
  if(classmates < 0 || pages < 0){
    return 0
  }else {
    let blankPagesNeeded = pages * classmates
    return blankPagesNeeded
  }
}
