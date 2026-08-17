// const { createServer } = require('node:http');
// import { createServer } from 'node:http'; // ✅ Works with "type": "module"


// // const fs = require("fs")

// import http from "http"

// const hostname = '127.0.0.1';
// const port = 3001;


// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//  res.end('<h1>Hello World pagal gat hai</h1>'); // ✅ valid HTML inside quotes

  
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });




// import {a,b,d} from "./mymodule.js"
// console.log(a,b,d)


// import obj from "./mymodule.js"
// console.log(obj)
import ayush from "./mymodule.js"
console.log(ayush)

// const a = require("./mymodule2.js")

// console.log(a)