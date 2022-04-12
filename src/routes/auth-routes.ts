import Router from 'router'
const router= Router();
import authentication from  '../middleware/authentication';
import registerController from '../controller/auth/register-controller';;
import loginController from '../controller/auth/login-controller';


// Register a user
router.route('/register').post(
    registerController.registerUser
);

// Login
router.route('/login').post(
    loginController.loginUser 
)
export default router;