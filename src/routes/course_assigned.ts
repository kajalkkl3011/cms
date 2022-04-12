import Router from 'router'
const router = Router();
import courseassignedcotroller from '../controller/auth/courseassigned-cotroller'
import authentication from '../middleware/authentication'

router.route('/course/course-assigned').post(
     authentication,
    courseassignedcotroller.courseassigned
);
router.route('/course/course-assigned').get(
    authentication,
    courseassignedcotroller.getAllUser
);

export default router;