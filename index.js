import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import express from 'express'

const app = express()
app.use(bodyparser.json())
app.use(cors())
app.listen(3000 || process.env.PORT,()=>{console.log("connected to port:"+process.env.PORT)})
app.get('/', function (req, res) {
    res.send('Welcome to mongoDB coneect');
    
  });