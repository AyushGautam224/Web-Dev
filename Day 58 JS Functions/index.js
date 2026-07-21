function hey(name) {
    console.log("hey "  + name + " what's up")
    console.log("hey "  + name + " you are good")
    console.log("hey "  + name + " you are one")
    console.log("hey "  + name + " how are you")
}

function sum(a , b , c = 3) {
    // console.log(a + b)
    return a + b + c
}
// hey( "ayush" )

// hey("aman")

result = sum (3)
result1 = sum (7 ,5)
result2 = sum (3 ,9)

console.log("The sum of these numbers is : ", result)
console.log("The sum of these numbers is : ", result1)
console.log("The sum of these numbers is : ", result2)

const func1 = (x)=>{
    console.log("i am an arrow",x)
}
    
func1(34);
func1(38);
func1(55);