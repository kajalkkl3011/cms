import Router from 'router'
const router = Router()
import roleController from '../controller/admin/role-controller'
import authentication from '../middleware/authentication'

// create a role
router.route('/role').post(
    authentication,
    roleController.createUserRole
);

export default  router;