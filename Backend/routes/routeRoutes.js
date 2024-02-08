const router=require('express').Router()
const {getRoutes,postRoutes,putRoutes,deleteRoutes,getData}=require('../controllers/routeControllers')

router.route('/').get(getRoutes).post(postRoutes)
router.route('/:id').put(putRoutes).delete(deleteRoutes)
router.route('/:id/:querry').get(getData)

module.exports=router