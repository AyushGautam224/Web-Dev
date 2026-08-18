const fs = require("fs")

// const fs = require("fs/promises")

console.log(fs)

console.log("starting")
// fs.writeFileSync("ayush.txt", "Ayush is a strong buddy")

fs.writeFile("ayushg.txt", "Ayush is a best one", ()=>{
    console.log(("done"))
    fs.readFile("ayushg.txt", (error , data)=>{
        console.log(error , data.toString())
    })
})

fs.appendFile("ayushg.txt","ayush suartes", (e , d)=>{
    console.log(d.toString)
})
console.log("ending")