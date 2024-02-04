const router=require('express').Router()
const {getRoutes,postRoutes,putRoutes,deleteRoutes}=require('../controllers/routeControllers')

router.route('/').get(getRoutes).post(postRoutes)
router.route('/:id').put(putRoutes).delete(deleteRoutes)

module.exports=router