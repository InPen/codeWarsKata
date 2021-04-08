// Given an array of strings: timePoint = [“Baseline”,“Screening”,“Week 1”,“Week 2",“Week 3”,“Unscheduled”]
// and a positive number N, return a new array composed of the Nth letter of each string.
// Example:
// 	example_func(timePoint, 4) returns [“e”,“e”,“k”,“k”,“k”,“c”]

// P : an arr of strings && positive number
// R : return and arr of the Nth letter of every string
// E : [“Baseline”,“Screening”,“Week 1”,“Week 2",“Week 3”,“Unscheduled”] => [B,S,W,W,W,U]
// P : for each string i want to access the Nth character and add it to a new array 
// for now I can expect n to fit the length of all strings 
//if n > length of string return last character


//!!!create an error if n does not fit the string!!! console.log(err)???

    const nLetter = (arr, n) => {
        let nArray = []
        for(let i = 0; i < arr.length; i++){
            let word = arr[i]
            if (n > word.length) {
                let lastLetter = word.length - 1;
              nArray.push(word[lastLetter]);
            } else {
                nArray.push(word[n - 1]);
            }

        }

        return nArray
    }
    
    let result = nLetter(
      ["Baseline", "Screening", "Week 1", "Week 2", "Week 3", "Unscheduled"],
      7
    )
    console.log(result)