const mongoose=require('mongoose')

const recentlySearchedSchema=mongoose.Schema({
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
    }
})

module.exports=mongoose.model('RecentlySearched',recentlySearchedSchema)