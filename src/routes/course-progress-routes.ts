import Router from 'router'
const router = Router();
import progresscontroller from '../controller/auth/progress-controller'
import authentication from '../middleware/authentication'

router.route('/course/course-progress').post(
     authentication,
    progresscontroller.courseprogress
);
router.route('/course/course-progress').get(
     authentication,
    progresscontroller.getAllUser
);
export default  router;