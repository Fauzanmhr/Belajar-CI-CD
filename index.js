const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({
    msg: "Hello Word"
  })
})

app.get('/name', (req, res) => {
  res.json({
    msg: "Your Name is Muhammad Fauzan Muharram"
  })
})

app.get('/age', (req, res) => {
  res.json({
    msg: "Your age is 21"
  })
})

const PORT = 3000

app.listen(PORT, () => console.log(`App running on PORT ${PORT}`))

module.exports = app;