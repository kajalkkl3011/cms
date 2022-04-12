import Router from 'router'
const router = Router();
import referencelinkcontroller from '../controller/auth/referencelink-contoller'
import authentication from '../middleware/authentication'

router.route('/course/reference-link').post(
    authentication,
    referencelinkcontroller.referencelink
);
router.route('/course/reference-link').get(
    authentication,
    referencelinkcontroller.getAllUser
);

export default  router;