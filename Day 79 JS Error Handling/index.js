let a = prompt("Enter first no ")

let b = prompt("Enter second no ")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry only INtegers Allowed")
}

let sum = parseInt(a) + parseInt(b)
function main(){
// console.log("The sum is ", sum)
let x = 1;
try {
    console.log("The sum is ", sum * x)
    return true
} catch (error) {
    console.log("Error aa gawa")
    return false
}
finally {
    console.log("files are being closed nd db connection is being closed")
}
}
let c = main()