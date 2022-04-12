import responseDispatcher  from '../../lib/db/response-dispatcher'
import courseassignedrepository  from '../../repositories/courseassigned-repository'

 export class CourseassignedCotroller{

    /**
     * Create a coures
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async courseassigned(req, res){
        try {
            const input = req.body;
            const courseassignedDetail = await courseassignedrepository.courseassigned(input)
            return responseDispatcher.dispatchSuccess(res, courseassignedDetail,'Course Assigned ', 200)
        } catch (error) {
            return responseDispatcher.dispatchError(res, {},   error.message,422);
        }
    }
    async getAllUser(req:any, res:any) {
        const myDetail = await courseassignedrepository.getAllUser();
        return responseDispatcher.dispatchSuccess(res, myDetail,'', 200);
    }
}


const courseassignedcotroller = new CourseassignedCotroller();
export default courseassignedcotroller;


