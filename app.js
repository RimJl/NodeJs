const express =require('express')
const app = express()

const voitures = require('./routes/voitures')

//use the middlware body parser in express
app.use(express.json())

app.use('/voitures',voitures)


app.listen(3000,()=>{
    console.log("first server is runner on port 3000")
})