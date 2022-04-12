import Router from 'router'
const router = Router();
import topicController from '../controller/auth/topic-controller'
import authentication from '../middleware/authentication'

router.route('/course/create-topic').post(
     authentication,
    topicController.createTopic
);
router.route('/course/create-topic').get(
    authentication,
   topicController.getAllUser
);
export default  router;