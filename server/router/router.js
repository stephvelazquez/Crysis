var router = require('express').Router();
var controller = require('../controllers/indexAPI.js');
var middleware = require('../utils/middleware.js');

router.get('/user', middleware.tokenCheck, controller['user'].get);
router.get('/organization', middleware.tokenCheck, controller['organization'].get);
router.get('/emergency', middleware.tokenCheck, controller['emergency'].get);

router.post('/user', middleware.tokenCheck, controller['user'].post);
router.post('/organization', middleware.tokenCheck, controller['organization'].post);
router.post('/emergency', middleware.tokenCheck, controller['emergency'].post);

router.put('/user', middleware.tokenCheck, controller['user'].put);
router.put('/organization', middleware.tokenCheck, controller['organization'].put);
router.put('/emergency', middleware.tokenCheck, controller['emergency'].put);

router.delete('/user', middleware.tokenCheck, controller['user'].delete);
router.delete('/organization', middleware.tokenCheck, controller['organization'].delete);
router.delete('/emergency', middleware.tokenCheck, controller['emergency'].delete);

module.exports = router;