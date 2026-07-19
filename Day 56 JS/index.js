console.log("hey i am a conditional tutorial");

let age = 1;
// let grace = 0;

// age += grace

// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)


// if((age+grace) > 18){
//     console.log("you can drive");
// }
if (age > 18) {
    console.log("You can drive");
}
else if (age === 0) {
    console.log("Go to hell");
}
else if (age === 1) {
    console.log("Go to hell again");
}
else {
    console.log("you can not drive");
}

a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);

/* 
translates to :
if(a>b){
let c = a - b;
}
else {
let c = a - b;
}
*/
