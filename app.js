
const express = require("express")

app = express()

app.listen(3000,() => {
    console.log("app is running on port 5000")
})

app.get("/", (req, res) => {
    res.send("api world")
})