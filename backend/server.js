require('dotenv').config()
const express = require('express')

//express app
const app = express()

// middlewares
app.use((req, res, next)=>{
        console.log(req.path, req.method)
        next()
})
//routes
app.get('/', (req, res)=>{
        res.json({msg: "just a start"})
})

// listen for requests
app.listen(process.env.PORT, ()=>{
        console.log('Listening on port:', process.env.PORT)
})