import responseDispatcher from '../../lib/db/response-dispatcher'
import progressrepository from'../../repositories/progress-repositories' 

 export class ProgressController{

    /**
     * Create a coures
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async courseprogress(req, res){
        try {
            const input = req.body;
            const referenceDetail = await progressrepository.courseprogress(input)
            return responseDispatcher.dispatchSuccess(res, referenceDetail,'COURSEPROGRESS ADDED', 200)
        } catch (error) {
            return responseDispatcher.dispatchError(res, {},   error.message,422);
        }
    }
    async getAllUser(req, res) {
        const myDetail = await progressrepository.getAllUser();
        return responseDispatcher.dispatchSuccess(res, myDetail,'', 200);
    }
}



const progresscontroller = new ProgressController();
export default progresscontroller;


