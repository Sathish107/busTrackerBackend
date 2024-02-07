const asyncHandler=require('express-async-handler')
const RecentlySearched=require('../models/recentlySearchedModel')

const getRecentlySearched=asyncHandler(async (req,res)=>{
    const searches=await RecentlySearched.find()
    res.status(200).json({searches})
})

const postRecentlySearched=asyncHandler(async(req,res)=>{
    const {routeId,start,destination,searchedFor}=req.body
    const newSearch=await RecentlySearched.create({
        routeId,
        start,
        destination,
        searchedFor
    })

    res.status(201).json({newSearch})
})

module.exports={
    getRecentlySearched,
    postRecentlySearched
}