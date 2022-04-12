import responseDispatcher from "../../lib/db/response-dispatcher"
import userRepository from "../../repositories/user-repositories"
import roleRepository from "../../repositories/role-repositories"

class UserController {
  /**
   * List all users
   *
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async getUsers(req: any, res: any) {
    try {
      const userDetail: any = await userRepository.getAllUser();
      return responseDispatcher.dispatchSuccess(res, userDetail, "success...");
    } catch (error: any) {
      return responseDispatcher.dispatchError(res, {}, error.message, 422);
    }
  }

  /**
   * Get a user deatil
   * 
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async getUserDetailsById(req: any, res: any) {
    // console.log(req.params["id"]);
    // console.log(req.params)
    try {
      const userDetail: any = await userRepository.getUser(req.params["id"]);
      if (!userDetail) {
        throw new Error("user not found");
      }
      // const data = {
      //   data: {
      //     userDetail,
      //   },

      //   message: "",
      
      return responseDispatcher.dispatchSuccess(res, userDetail, "Success...");
    } catch (error: any) {
      return responseDispatcher.dispatchError(res, {}, error.message, 422);
    }
  }
}

const userController = new UserController();
export default userController;
