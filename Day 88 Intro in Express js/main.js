// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World hh');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('About us')
})
app.get('/commands', (req, res) => {
  res.send('About us')
})
// app.get('/blog/:slug', (req, res) => {
//   res.send(`hello ${req.params.slug}`)
// })
app.get('/blog/:slug/:second', (req, res) => {
    console.log(req.params)
    console.log(req.query)
  res.send(`hello ${req.params.slug} `)
//   and ${req.params.slug}
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

