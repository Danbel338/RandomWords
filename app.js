require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const db = require('./src/db/setup')
const phrase = require("./src/routes/phrases")


app.use(express.json()) //creo que este no es necesario el siguiente si
app.use(express.urlencoded({ extended: true})) //para poder usar "req.body"

app.use("/phrases", phrase)

app.get('/', (req, res) => {
  res.sendFile(process.env.ROOT + `/pages/index.html`)
})

app.listen(port, () => {
  console.log(`SERVER RUNNING AT ${process.env.PORT}`)
})

