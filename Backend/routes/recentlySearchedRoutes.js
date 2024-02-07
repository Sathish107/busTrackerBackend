const router=require('express').Router()
const {getRecentlySearched,postRecentlySearched}=require('../controllers/recentlySearchedControllers')

router.route('/').get(getRecentlySearched).post(postRecentlySearched)

module.exports=router