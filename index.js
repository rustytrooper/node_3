const express = require('express')
const { parseBody } = require('./helpers.js')
const { createFilm } = require('./requests/createFilm.js')

const app = express();


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/api/films/create', function (req, res) {
  parseBody(req, createFilm)
  res.send('success when creating film')
})

app.post('/api/films/update', function (req, res) {

})


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})