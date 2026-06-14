const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200).json({ message : 'Re-Triggering the Run on ubuntu with change v2'})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})