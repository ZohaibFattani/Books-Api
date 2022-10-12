const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.use("/books", require("./controllers/books"));

app.listen(process.env.PORT)
