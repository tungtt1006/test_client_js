const express = require('express')

const app = express()

app.listen(3001, () => {
  console.log('app listening on port 3000')
})

app.get('/test', (req, res) => {
  res.json({ msg: "welcom to the api" })
})