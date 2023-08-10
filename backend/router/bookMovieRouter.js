const router = require('express').Router()
const bookMovieMiddleWare = require('../middleware/bookMoiveMiddleware')
const BookMovieController = require('../controller/bookMovieController')
router.get('/',BookMovieController.getFunction)
router.post('/',bookMovieMiddleWare,BookMovieController.postFuntion)

module.exports = router