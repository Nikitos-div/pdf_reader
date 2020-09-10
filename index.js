
const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
require('dotenv').config()
const cors = require('cors')


app.use(cors())
app.use('/', express.static(__dirname + '/dist'));




app.get('/files', (req, res) => {
    const readFile = () => new Promise((resolve, reject) => {
        fs.readFile('./files/New_Horizons.pdf', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
    readFile()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(404).send(err))
})

let PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})


