// let obj = {
//     a: 1,
//     b: "ayush"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;

class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }
    eats(){
        console.log("kaha ghumm rhe ho")
    }
    jumps(){
        console.log("kood  rhe ho")
    }
}

class Lion extends Animal {
     constructor(name){
        super(name)
        this.name = name
        console.log("Object is created and he is a lion...")
    }
    eats(){
        super.eats()
        console.log("kaha ghumm rhe ho sher")
    }
}


let a = new Animal("Bunny");
console.log(a)

let l = new Lion("Sher")
console.log(l)