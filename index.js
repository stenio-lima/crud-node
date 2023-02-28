const express = require('express')

const server = express()
server.use(express.json())

const countries = ['Brazil', 'Holanda', 'Monaco']

// return country
server.get('/countries/:index', (req, res) => {
  const { index } = req.params

  return res.json(countries[index])
})

// return all countries
server.get('/countries', (req, res) => {
  return res.json(countries)
})

// create new country
server.post('/countries', (req, res) => {
  const { name } = req.body
  countries.push(name)

  return res.json(countries)
})

// update country
server.put('countries/:index', (req, res) => {
  const { index } = req.params
  const { name } = req.body

  countries[index] = name

  return res.json(countries)
})

// delete country
server.delete('/countries/:index', (req, res) => {
  const { index } = req.params
  
  countries.splice(index, 1)
  return res.json({message : "the country has been successfully deleted"})
})

server.listen(3000)

// CRUD --> create, read, update, delete.