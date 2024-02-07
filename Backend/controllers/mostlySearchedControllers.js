const asyncHandler=require('express-async-handler')
const MostlySearched=require('../models/mostlySearchedModel')

const getMostlySearched=asyncHandler(async (req,res)=>{
    const searches=await MostlySearched.find()
    res.status(200).json({searches})
})

const postMostlySearched=asyncHandler(async (req,res)=>{
    const {routeId,start,destination,searchedFor,count}=req.body
    const newSearch=await MostlySearched.create({
        routeId,
        start,
        destination,
        searchedFor,
        count
    })

    res.status(201).json({newSearch})
})

module.exports={
    getMostlySearched,
    postMostlySearched
}