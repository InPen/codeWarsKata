function tailAndHead(arr){
  let stringArr = arr.map((x)=>x.toString());
  let heads = [];
  let tails = [];
  for(let i=0; i<stringArr.length; i++){
      heads.push(stringArr[i][0]);
      tails.push(stringArr[i][stringArr[i].length-1]);
  }
  let sumArr = heads.slice(1).map((num, idx)=>parseInt(num) + parseInt(tails[idx]));
  console.log(sumArr);
  return sumArr.reduce((a,b)=>a*b);
}
