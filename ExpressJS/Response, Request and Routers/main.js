const express = require("express")
const app = express()
const port = 3000
const blog = require("./routes/blog")
const shop = require("./routes/shop")

app.use(express.static("public"))
app.use("/blog",blog)
app.use("/shop",shop)

app.get("/", (req,res) => { 
    res.send("hello world")
})

app.post("/", (req,res) => { 
    console.log("hey its a post request")
    res.send("hello world. Its a post method")
})

app.put("/", (req,res) => { 
    console.log("hey its a put request")
    res.send("hello world. Its a put method")
})

app.get("/index",(req,res) => { 
    res.sendFile("templates/index.html",{root:__dirname})
 })



app.listen(port, () => { 
    console.log(`Example app is listening on port ${port}`)
})