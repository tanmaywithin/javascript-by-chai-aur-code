const accountId=14456
let accEmail="t@gmail.com"
var accPassward="12345"//prefer not to use var because of issue in block scope and functional scope
accCity ="jaipur"//variable can store without datatype but not preferable...
let accstate; 

//accountId=12//not allowed

accEmail="hc@gmail.com"
accPassward="1234"
accCity="bengaluru"

console.log(accountId);
console.table([accPassward,accEmail,accountId,accstate]);