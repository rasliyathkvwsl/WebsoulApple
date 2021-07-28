const express = require('express')
const app = express()
 const mongoose=require('mongoose')
 const dotnev=require('dotenv')
 const routesUrls =require('./routes/signup')
 const cors = require('cors')


 dotnev.config()


 mongoose.connect(process.env.DATABASE_ACCESS,()=>
 console.log("Database connected "))



app.use(express.json())
app.use(cors())
app.use('/signup',routesUrls)
app.listen(4000, () => console.log("Server is running "))