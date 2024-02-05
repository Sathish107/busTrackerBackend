const asyncHandler=require('express-async-handler')
const Bus=require('../models/busModel')
const uuid=require('uuid')

const getBus=asyncHandler(async (req,res)=>{
    const buses=await Bus.find()
    res.status(200).json({"message":buses})
})

const postBus=asyncHandler(async (req,res)=>{
    const {busNo,routeNo,busType,apiKey,start,destination}=req.body
    if(busNo&&routeNo&&busType&&apiKey&&start&&destination){
        const newBus=await Bus.create({
            busNo:busNo,
            routeNo:routeNo,
            busType:busType,
            apiKey:apiKey,
            start:start,
            destination:destination
        })
        res.status(200).json({"message":newBus})
    }else{
        res.status(400).json({"message":"Enter all the data"})
    }
})

const putBus=asyncHandler(async (req,res)=>{
    const updatedBus=await Bus.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({"updated Bus":updatedBus})
})

const deleteBus=asyncHandler(async (req,res)=>{
    const bus=await Bus.findById(req.params.id)
    if(bus){
        await Bus.findByIdAndDelete(req.params.id)
        res.status(200).json({"id":req.params.id})
    }else{
        res.status(400).json({"message":`no bus with id ${req.params.id}`})
    }
})

const getApiKey=asyncHandler(async (req,res)=>{
    let apiKey=uuid.v4()
    let bus=await Bus.findOne({"apiKey":apiKey})
    while(bus){
        apiKey=uuid.v4()
        bus=await Bus.findOne({"apiKey":apiKey})
    }
    res.status(200).json({"apiKey":apiKey})
})

module.exports={
    getBus,
    postBus,
    putBus,
    deleteBus,
    getApiKey
}