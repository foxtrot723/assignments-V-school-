const express = require("express")
const app = express()

app.get('/', (request, response) => {
    response.send("hello wordcsld")
})

app.get('/socks', (req, res) => {
    res.send("heeeey")
})

app.listen(6060, function() {
    console.log(`YO OY YO`)
})


