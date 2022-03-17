const responseDispatcher = require('../../lib/response-dispatcher');

class RegisterController{

   
    async registerUser(req, res) {
        const response = {
            username: "kajal_k",
            passowrd: "12345678",
            email: "kajal@mailinator.com",
            first_name: "kajal",
            last_name: "K",
        }
        return responseDispatcher.dispatchSuccess(res, response, "User added successfully");
    }
}
const registerController = new RegisterController();
module.exports = registerController;