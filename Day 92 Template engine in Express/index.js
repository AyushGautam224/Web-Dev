const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = [1, 54, 67]
  res.render("index.ejs", {siteName: siteName, searchText: searchText, arr})
})
app.get('/', (req, res) => {
    let blogTitle = "Adidas why and when"
    let blogContent = "its a very good brand"

  res.sendFile("blogpost.ejs", {blogTitle: blogTitle, blogContent: blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
