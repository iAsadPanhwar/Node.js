const fs = require("fs")

console.log("starting")
// fs.writeFileSync("asad.txt", "Asad is good boy")
fs.writeFile("asad2.txt", "Asad is a good boy2", () => { 
    console.log("done")
    fs.readFile("asad2.txt", (error,data) => { 
        console.log(error,data.toString()) 
    })
})

fs.appendFile("asad.txt","Asad Ali Panhwar", (error, data) => { 
    console.log(data)
})
console.log("ending")

