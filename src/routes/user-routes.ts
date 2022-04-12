import Router from 'router'
const router = Router();
import authentication from '../middleware/authentication'
import userController from '../controller/admin/user-controller'


// List all users
router.route('/users').get(
       authentication,
    userController.getUsers
);

// Get a user detail
router.route('/user/:id').get(
    userController.getUserDetailsById
);

export default  router;