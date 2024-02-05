const mongoose=require('mongoose')

const busSchema=mongoose.Schema({
    busNo:{
        type:String,
        required:true
    },
    routeNo:{
        type:String,
        required:true
    },
    busType:{
        type:String,
        required:true
    },
    apiKey:{
        type:String,
        required:true
    },
    start:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:"inactive"
    },
    currentLocation:[Number]
})

module.exports=mongoose.model('Bus',busSchema)