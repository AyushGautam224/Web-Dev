const express = require('express')
const app = express()
const mongoose = require('mongoose');
const majdoor = require("./models/majdoor")

mongoose.connect('mongodb://127.0.0.1:27017/suar');
const port = 3000

app.set('view engine', 'ejs');
const getRandom = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}


app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})
app.get('/generate', async (req, res) => {
    //random data 

   await majdoor.deleteMany({})

    let randomNames = ["rohan", "sohan", " ayush"]
    let randomlang = ["python", "c", "c++"]
    let randomcity = ["lucknow", "kanpur", "sitapur"]

    for (let index = 0; index < 10; index++) {
        let e = await majdoor.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 45000),
            //salary: Math.floor(Math.random() * 45000),

            language: getRandom(randomlang),
            city: getRandom(randomcity),
            isManager: (Math.random() > 0) ? true : false
        })
        await e.save()

    }
    res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})




