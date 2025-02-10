const express = require("express")
const app = express()
const port = 3000


app.use(express.static("public"))

// app.get or app.post or app.put or app.delete(path,handler)
app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/contact", (req, res) => {
    res.send("Hello Contact me")

})

app.get("/about", (req, res) => {
    res.send("hello About")
})

app.get("/blog/:slug", (req, res) => {
    // Logic to fetch {slug} from the db
    res.send(`hello ${req.params.slug}`)
})


// app.get("/blog/intro-to-js", (req, res) => {
//     // Logic to fetch intro to js from the db
//     res.send("What is JavaScript.")
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})