const Router = require('router')
const router = Router()
const registerController = require('../controller/auth/register-controller')

router.route('/register-user').get(
    registerController.registerUser
);

module.exports = router;