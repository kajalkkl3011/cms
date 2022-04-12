import Router from 'router'
const router = Router();
import courseController from '../controller/auth/course-controller'
import authentication from '../middleware/authentication'

router.route('/course/create-course').post(
     authentication,
    courseController.createCourse
);

router.route('/course/list-courses').get(
     authentication,
    courseController.getCourseDetails
);

router.route('/course/list-user-courses').get(
     authentication,
    courseController.getUserCourse
);

export default  router;





