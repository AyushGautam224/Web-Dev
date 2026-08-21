const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

// app.use(express.static("Public"))

app.use('/blog', blog)

// // middleware 1
app.use((req, res, next) => {
  console.log(req.headers)
  req.ayush = "hey its me here buddy"
  fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
  console.log(`${Date.now()} is a ${req.method}`)
  res.send("Hacking middle ware")
  next()
})

// // middleware 2

app.use((req, res, next) => {
  console.log('M2')
  next()
})


app.get('/', (req, res) => {
  res.send('Hello World! ayush g')
})
app.get('/about', (req, res) => {
  res.send('Hello about' + req.ayush)
})
app.get('/contact', (req, res) => {
  res.send('Hello contact')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
