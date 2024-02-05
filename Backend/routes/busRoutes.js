const router=require('express').Router()
const {getBus,postBus,putBus,deleteBus,getApiKey}=require('../controllers/busControllers')

router.route('/').get(getBus).post(postBus)
router.route('/:id').put(putBus).delete(deleteBus)
router.route('/getapikey').get(getApiKey)

module.exports=router
