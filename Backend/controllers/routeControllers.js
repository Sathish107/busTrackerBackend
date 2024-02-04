const asyncHandler=require('express-async-handler')
const Route=require('../models/routeModel')

const getRoutes=asyncHandler(async (req,res)=>{
    res.status(200).json({"message":"get routes"})
})

const postRoutes=asyncHandler(async (req,res)=>{
    const {routeNo,start,destination,stops,routeCoords}=req.body
    if(routeNo&&start&&destination&&stops&&routeCoords){
        const newRoute=await Route.create({
            routeNo:routeNo,
            start:start,
            destination:destination,
            stops:stops,
            routeCoords:routeCoords.map(coord => ({ lat: coord.lat, lng: coord.lng }))
        })

        res.status(200).json({"New route":newRoute})
    }else{
        res.status(400).json({"message":"Enter all required fields"})
    }
})

const putRoutes=asyncHandler(async (req,res)=>{
    res.status(200).json({"message":`put routes ${req.params.id}`})
})

const deleteRoutes=asyncHandler(async (req,res)=>{
    res.status(200).json({"message":`delete routes ${req.params.id}`})
})

module.exports={
    getRoutes,
    postRoutes,
    putRoutes,
    deleteRoutes
}