// build your server here and require it from index.js
const express = require('express')
const projectsRouter = require('./project/router')
const server = express()

server.use(express.json())
server.use('/api/projects', projectsRouter)

server.get('/',(req, res) => {
    res.send(`
    <img src='https://i.pinimg.com/originals/79/39/df/7939df472d54342d3ed3f020f8d27c36.gif' />
    `)
})

module.exports = server