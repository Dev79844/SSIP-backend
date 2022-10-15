const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const routes = require('./routes/routes')

const app = express();

app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api', routes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, ()=>console.log(`Server started on ${process.env.PORT}`))
    })