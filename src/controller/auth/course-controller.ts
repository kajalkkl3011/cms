import responseDispatcher from '../../lib/db/response-dispatcher'
import courseRepository from  '../../repositories/course-repositories'

export class CourseController{

    /**
     * Create a coures
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async createCourse(req, res){
        try {
            const input = req.body;
            const user = req.loggedInUser;
            const courseDetail = await courseRepository.createCourse(user,input)
            return responseDispatcher.dispatchSuccess(res, courseDetail,'Course Created successfully.', 200)
        } catch (err) {
            return responseDispatcher.dispatchError(res, {},  'already_create' , 422);
        }
    }

    /**
     * Get course details
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async getCourseDetails(req, res) {
        const courseDetail = await courseRepository.getCourseDetails()
        return responseDispatcher.dispatchSuccess(res, courseDetail,'Successful...', 200)
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async getUserCourse(req, res) {
        const myCourseDetail = await courseRepository.getUserCourse(req, res);
        return responseDispatcher.dispatchSuccess(res, myCourseDetail,'', 200);
    }
}

const courseController = new CourseController();
export default courseController;
