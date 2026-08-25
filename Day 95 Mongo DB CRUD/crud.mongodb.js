use("crudDb")

// db.createCollection("cources")
// db.cources.insertOne({
//     name: "ayushgautam ",
//     price: "500",
//     assignments: "12",
//     projects: "45"
// })

// db.cources.insertMany(
// )

// let a =  db.courses.find({price: 680})
// console.log(a.count())

// db.cources.updateOne({price: 500}, {$set:{price: 100}})
// db.cources.updateMany({price: 500}, {$set:{price: 100}})

// db.cources.deleteOne({price : 100 })
db.cources.deleteMany({price : 100 })