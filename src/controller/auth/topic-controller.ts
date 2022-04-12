import responseDispatcher from '../../lib/db/response-dispatcher'
import topicRepository from '../../repositories/topic-repositories' 
class TopicController{

    /**
     * Create a coures
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async createTopic(req : any, res: any){
        try {
            const input = req.body;
            const topicDetail = await topicRepository.createTopic(input)
            return responseDispatcher.dispatchSuccess(res, topicDetail,'TOPIC ADDED', 200)
        } catch (err : any) {
            return responseDispatcher.dispatchError(res, {},   err.message,422);
        }
    }

async getAllUser(req, res) {
    const myDetail: any = await topicRepository.getAllUser();
    return responseDispatcher.dispatchSuccess(res, myDetail,'', 200);
}
}



const topicController = new TopicController();
export default  topicController;
