const mongoose=require('mongoose')

const mostlySearchedSchema=mongoose.Schema({
    routeId:{
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
    searchedFor:{
        type:String,
        required:true
    },
    count:{
        type:Number,
        required:true
    },
})

module.exports=mongoose.model('MostlySearched',mostlySearchedSchema)