//create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// P : im taking in a list with nums and strings
// R : return a new list with only nums
// E : ['snooky', 23, 18, 'mouse', 44, 'orchid']
// P : access indiviadual elements in list
// check for nums and strings
// if we find nums add to new list

const filterList(list) {
  return list.filter(number => typeof number == 'number')

}
filterList(['snooky', 23, 18, 'mouse', 44, 'orchid'])
