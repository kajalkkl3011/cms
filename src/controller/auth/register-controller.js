const responseDispatcher = require('../../lib/response-dispatcher');
const userRepositories = require('../../repositories/user-repositories');

class RegisterController{
    async registerUser(req, res) {
        const input = req.body;
        const response = await userRepositories.storeuser(input);
        return responseDispatcher.dispatchSuccess(res, response, "user added successfully");
    }
    async loginuser(req, res) {
        try {
            const input = req.body;
            const response = await userRepositories.userAuth(input);
            console.log('response matched user => ', response);
            return responseDispatcher.dispatchSuccess(res, response,  "Login Success");
        } catch (error) {
             console.log('inside catch');
            return responseDispatcher.dispatchError(res, {},  error.message);
        }
    }
        async fetchDetail(req, res) {
            try {
                const users = await userRepositories.fetchDetail();
                // console.log('response matched user => ', response);
                return responseDispatcher.dispatchSuccess(res, users,  " Success");
            } catch (error) {
                 console.log('inside catch');
                return responseDispatcher.dispatchError(res, {},  error.message);
            }

        
        }
    }


const registerController = new RegisterController();
module.exports = registerController;