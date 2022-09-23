var express = require('express');
var router = express.Router();

const { index, aboutUs } = require('../controllers/indexController')


/* GET users listing. */

router.get('/', index);
router.get('/aboutUs', aboutUs);



module.exports = router;