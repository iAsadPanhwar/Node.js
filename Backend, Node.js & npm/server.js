console.log("Hello World")

var slugify = require("slugify")

let a = slugify("some string")

const b = slugify("some string", "_")

console.log(a,b)