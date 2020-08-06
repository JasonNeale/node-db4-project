const express = require('express')
const server = express()
const cors = require('cors')
const recipeRouter = require('../routes/recipes-router')

server.use(express.json())
server.use(cors())
server.use('/api/recipes', recipeRouter)

module.exports = server