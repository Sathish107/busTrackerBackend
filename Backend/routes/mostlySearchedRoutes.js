const router=require('express').Router()
const {getMostlySearched,postMostlySearched}=require('../controllers/mostlySearchedControllers')
  
router.route('/').get(getMostlySearched).post(postMostlySearched)

module.exports=router