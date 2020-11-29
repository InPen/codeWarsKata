function totalVotes(arr) {
  console.log(voters.reduce((total, recentVoters) => total + recentVoters.voted))
}
var voters = [
    {name:'Bob' , age: 30, voted: "Biden"},
    {name:'Jake' , age: 32, voted: "Biden"},
    {name:'Kate' , age: 25, voted: "Trump"},
    {name:'Sam' , age: 20, voted: "Trump"},
    {name:'Phil' , age: 21, voted: "Biden"},
    {name:'Ed' , age:55, voted:"Biden"},
    {name:'Tami' , age: 54, voted:"Biden"},
    {name: 'Mary', age: 31, voted: "Trump"},
    {name: 'Becky', age: 43, voted: "Trump"},
    {name: 'Joey', age: 41, voted: "Biden"},
    {name: 'Jeff', age: 30, voted: "Biden"},
    {name: 'Zack', age: 19, voted: "Trump"}
];
console.log(totalVotes(voters)); // 7
