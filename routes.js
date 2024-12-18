const router = require('express').Router();
const { body } = require('express-validator');
const { register } = require('./controllers/registerController');
const { login } = require('./controllers/loginController');
const { getUser } = require('./controllers/getUserController');


router.post('/register', [
    body('name').notEmpty().isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 4 }),
], register);


router.post('/login', [
    body('email').isEmail(),
    body('password').isLength({ min: 4 }),
], login);


router.get('/getuser', getUser);

module.exports = router;