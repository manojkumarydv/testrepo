import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import connectDB from './db/connectdb.js'
const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL
import web from './routes/web.js'


//DB connection
connectDB(DATABASE_URL)

//Set template engine
app.set('view engine','ejs')


app.use(express.urlencoded({extended:true}))

//Load routes
app.use('/', web)


app.listen(port,()=>{
    console.log("Listening at port 8080");
})