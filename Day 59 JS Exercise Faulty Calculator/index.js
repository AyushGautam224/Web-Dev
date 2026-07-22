/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

let random = Math.random()
console.log(random)

let a = prompt("Enter first Number")
let b = prompt("Enter second Number")
let c = prompt("Enter operation")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}


if (random > 0.1){
alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
     c = obj[c]
}