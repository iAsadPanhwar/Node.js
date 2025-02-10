import fs from "fs/promises";

let a = await fs.readFile("asad.txt")

let b = await fs.appendFile("asad3.txt","This is amazing promise")
console.log(a.toString())
