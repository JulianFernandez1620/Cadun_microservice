const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hola', (req, res) => {
    res.send('Buena la rata!')
})

app.get('/num', (req, res) => {
    const query = req.query
    res.send(`Tu numero es: ${query.num}`)
})  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})