// const http = require("node:http") // This is common JS
// import http from "http"; //Express Module
// import {a, b} from "./my_module.js"
// console.log(a)

// const hostname = "127.0.0.1";
// const port = 3000;
// const server = http.createServer(
//     (req,res) => { 
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/html");
//         res.end("<h1>Hello world</h1>");
//     });
// server.listen(port, hostname, () => { 
//     console.log(`Server running at http://${hostname}:${port}/`)
// })

// import harry from "./my_module.js"

// console.log(harry) // Default Export

const a = require("./my_module2.js")

console.log(a)

