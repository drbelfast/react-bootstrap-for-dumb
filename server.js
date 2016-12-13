const express = require('express')

const app = express()

app.get('/fruits', (req, res) => {
    res.json({
        "apple": 1,
        "pear": 2
    })
})
app.listen(9000, function(req, res) {
    console.log("app is running on port 9000")
})