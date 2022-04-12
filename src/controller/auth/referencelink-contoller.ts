import responseDispatcher from '../../lib/db/response-dispatcher'
import referencelinkrepository from '../../repositories/referencelink-repository'

export class ReferecelinkController{

    /**
     * Create a coures
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async referencelink(req, res){
        try {
            const input = req.body;
            const referenceDetail = await referencelinkrepository.createlink(input)
            return responseDispatcher.dispatchSuccess(res, referenceDetail,'REFERENCELINK ADDED', 200)
        } catch (error) {
            return responseDispatcher.dispatchError(res, {},   error.message,422);
        }
    }
    async getAllUser(req, res) {
        const myDetail = await referencelinkrepository.getAllUser();
        return responseDispatcher.dispatchSuccess(res, myDetail,'', 200);
    }
}


const referecelinkcontroller = new ReferecelinkController();
export default referecelinkcontroller;


