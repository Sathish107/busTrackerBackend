const dotenv=require('dotenv').config()
const express=require('express')
const app=express()
const connectDB=require('./config/db')
connectDB()

const PORT=process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/api/route',require('./routes/routeRoutes'))
app.use('/api/bus',require('./routes/busRoutes'))

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})