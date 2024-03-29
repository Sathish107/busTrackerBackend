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
app.use('/api/user',require('./routes/userRoutes'))
app.use('/api/recentlysearched',require('./routes/recentlySearchedRoutes'))
app.use('/api/mostlysearched',require('./routes/mostlySearchedRoutes'))

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})