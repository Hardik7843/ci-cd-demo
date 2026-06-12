const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200).json({ message : 'Triggering the Run on ubuntu'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})