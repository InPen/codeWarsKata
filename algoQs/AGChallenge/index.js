Given an array of strings: timePoint = ["Baseline","Screening","Week 1","Week 2","Week 3","Unscheduled"]
and a positive number N, return a new array composed of the Nth letter of each string.
Example:
	example_func(timePoint, 4) returns ["e","e","k","k","k","c"]
  P : an arr of strings
	R : a new arr of nth letters of each string
	E : ['hi','bye','banana'] => ['i','y','a'] // (timePoint, 2) **N might be greater than the lenght of the string ** if n > arr.leength return arr w/empty strings
	P : n will determine the index of the string that I want on my new arr
  declare a new arr
  filter || loop
  
  const timePoint = (arr, n) => {
  let nLetterArr = []
  for(let i = 0, i < arr.length; i++){
  if(n < arr[i].length){
  	 nLetterArr.push((arr[i])[n-1]) //= "B"  question (arr[0])[4] ="l" what do we do, to get"e"?
     return nLetterArr
     }else if (n > arr[i].length) {
     nLetterArr.push('')
     return nLetterArr
     }
}
  
  }
timePoint(arr, 4)

1.initialize new arr
2.add to arr
3. pull from providedinput arr && string 