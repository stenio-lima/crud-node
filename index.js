const express = require('express')

const server = express()
server.use(express.json())

const countries = ['Brazil', 'Holanda', 'Monaco']

// return country
server.get('/countries/:index', (req, res) => {
  const { index } = req.params

  return this.json(countries[index])
})

// return all countries
server.get('/countries', (req, res) => {
  return res.json(countries)
})

server.listen(3000)