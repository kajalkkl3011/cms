const Router = require('router')
const router = Router()
const registerController = require('../controller/auth/register-controller');
// const userRepositories = require('../repositories/user-repositories');
const authorization = require('../middleware/authorization')
router.route('/register-user').post(
    registerController.registerUser

);

router.route('/login-user').post(
    registerController.loginuser
);

router.route('/fetch-detail').get(
     authorization,
    registerController.fetchDetail

);




module.exports = router;