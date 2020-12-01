function tailAndHead(arr){
  arr.reduce((accum, currentValue) => {
    let tail = accum.toString()
    let head = currentValue.toString()
    res = res * (parseInt(tail[tail.length - 1]) + parseInt(head[0]), 1)
    console.log(res)
  })

tailAndHead([123,456,789,12,34,56,78]) //532350
