const express = require('express')
const server = express()
const port = 1234
const hostname = '0.0.0.0'

server.use(express.json())

const usersRoutes = require('./routes/users.routes')
server.use('/users', usersRoutes)

server.listen(port, hostname, () => {
    console.log(`Server is running:${hostname}:${port}`)
})