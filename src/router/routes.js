const Router = require('router')
const router = Router()
const registerController = require('../controller/auth/register-controller')

router.route('/register-user').post(
    registerController.registerUser

);

router.route('/login-user').post(
    registerController.loginuser

);

module.exports = router;