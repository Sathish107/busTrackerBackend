const mongoose=require('mongoose')

const routeSchema=mongoose.Schema({
    routeNo:{
        type:Number,
        required:true
    },
    buses:[String],
    start:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    stops:[{
        _id:false,
        id:{
            type:Number,
            required:true
        },
        stopName:{
            type:String,
            required:true
        },
        latlng:[
            Number
        ]
    }],
    routeCoords:[{
        _id:false,
        lat:{
            type:Number,
            required:true
        },
        lng:{
            type:Number,
            required:true
        }
    }]
},{
    timestamps:true
})

module.exports=mongoose.model('Route',routeSchema)