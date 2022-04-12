import responseDispatcher from '../../lib/db/response-dispatcher'
import userRepository from '../../repositories/user-repositories'
 export class RegisterController{

    /**
     * Register a user
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async registerUser(req : any, res : any) {
        try {
            const input = req.body;
            const userDetail : any =  await userRepository.createUser(input);
            return responseDispatcher.dispatchSuccess(res, userDetail , "User added successfully");
        } catch (error : any) {
            return responseDispatcher.dispatchError(res, {},  error.message, 422);
        }
        
    }
}

const registerController = new RegisterController();
export default  registerController;