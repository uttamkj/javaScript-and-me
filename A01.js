const id = 123
let email = "uttamkumarjena507@gmail.com"
var acc = 507

city = "bbsr"
var x ;
let y;
console.log(city);
// console.table([id,email,acc,city,x,y])

/*
prefered not to use var 
because problem in block level and functional lebal.
Using var in modern JavaScript is not recommended due to its quirks, like function scoping instead of block scoping, and potential for unintended behavior. 
Instead, it's better to use let or const for declaring variables.
*/

if (true) {
    var x = 10; // Function-scoped
}
console.log(x); // 10 (accessible outside the block)

if (true) {
    let x = 10; // Block-scoped
}
console.log(x); // Error: x is not defined