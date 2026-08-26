// import mongoose from "mongoose";

// import express from "express";
// import { Todo } from "../models/Todo";

// let conn = await mongoose.connect("mongodb://localhost:27017/todo")


// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//     conn.todo = new Todo({ title: "Hey i m the first todo ", desc: "Description of this todo", isDone: false })
//     todo.save()
//     res.send('Hello World!')
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })


import mongoose from "mongoose";
import express from "express";
import Todo from "./models/Todo.js";
 // adjust if not default export



// Connect to MongoDB
try {
    await mongoose.connect("mongodb://localhost:27017/todo");
    console.log("MongoDB Connected");
} catch (err) {
    console.error(err);
}

const app = express()
const port = 3000

app.get('/', (req, res) => {
    try {
        const todo = new Todo({
            title: 1,
            desc: "Description of this todo",
            isDone: false,
            Days : "Ayush"

        })
         todo.save()
        res.send('Todo saved!')
    } catch (err) {
        res.status(500).send(err.message)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
