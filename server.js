const express = require('express')
const app = express()

const {verifyJwt} = require('./middlewares/jwt')
const {home} = require('./controllers')


app.post('/api/login', verifyJwt, home)

app.listen(8000, (port) => {
    console.log("server running on port 8000")
})