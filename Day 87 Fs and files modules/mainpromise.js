import fs from "fs/promises"

let a= await fs.readFile("ayush.txt")

let b = await fs.appendFile("ayushg.txt","\n\n\n\nthis is good choice")

console.log(a.toString() , b)