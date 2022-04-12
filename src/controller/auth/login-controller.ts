import responseDispatcher from '../../lib/db/response-dispatcher'
import userRepository from '../../repositories/user-repositories'

export class LoginController{

    /**
     * Logged in a user
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async loginUser(req, res) {
        try {
            const input = req.body;
            const response = await userRepository.loginUser(input);
            return responseDispatcher.dispatchSuccess(res, response,  "Login Success");
        } catch (error) {
            return responseDispatcher.dispatchError(res, {},  error.message, 422);
        }
    
    }

}

const loginController = new LoginController();
export default  loginController;