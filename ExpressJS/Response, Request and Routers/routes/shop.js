const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Home Page")
})

router.get("/about", (req, res) => {
    res.send("About blog")
})
router.get("/shop/:slug", (req, res) => {
    res.send(`fetch the shop details for ${req.params.slug}`)
})

module.exports = router