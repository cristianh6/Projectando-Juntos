var express = require('express');
var router = express.Router();

const { register, login } = require('../controllers/userController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('user access');
});

router.get('/login', login);
router.get('/register', register);



module.exports = router;
