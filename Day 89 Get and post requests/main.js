const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')


const app = express()
const port = 3000


app.use(express.static("Public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log("hello its a get req")
    res.send('Hello World14! ayush')
})
app.post('/', (req, res) => {
    console.log("hello its a post req ")
    res.send('Hello World14! post ')
})
app.put('/', (req, res) => {
    console.log("hello its a put req ")
    res.send('Hello World14! Put')
})

app.get("/index", (req, res) => {
    console.log("hello its index ")
    res.sendFile('templets/index.html', { root: __dirname })
})
app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name:"ayush"})
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})