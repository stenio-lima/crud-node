const express = require('express')

const server = express()
server.use(express.json())

const countries = ['Brazil', 'Holanda', 'Monaco']

// return country
server.get('/countries/:index', (req, res) => {
  const { index } = req.params

  return this.json(countries[index])
})

server.listen(3000)