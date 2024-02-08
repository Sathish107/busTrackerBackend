const asyncHandler=require('express-async-handler')
const Route=require('../models/routeModel')

const getRoutes=asyncHandler(async (req,res)=>{
    const routes=await Route.find()
    res.status(200).json({"routes":routes})
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
    const editedRoute=await Route.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({"editedRoute":editedRoute})
})

const deleteRoutes=asyncHandler(async (req,res)=>{
    await Route.findByIdAndDelete(req.params.id)
    res.status(200).json({"id":req.params.id})
})

const getData=asyncHandler(async (req,res)=>{
    const foundData=await Route.findById(req.params.id).select(req.params.querry)
    res.status(200).json({"message":foundData})
})

module.exports={
    getRoutes,
    postRoutes,
    putRoutes,
    deleteRoutes,
    getData
}