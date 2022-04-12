import responseDispatcher from "../../lib/db/response-dispatcher"
import userRepository from "../../repositories/user-repositories"
import roleRepository from "../../repositories/role-repositories"

class RoleController {
  
  /**
   * Create a Role
   *
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async createUserRole(req:any , res:any) {
    try {
      const input = req.body;
  const roleDetail =  await roleRepository.createUserRole(input);
  return responseDispatcher.dispatchSuccess(res, roleDetail, "role added successfully");
      
    } catch (error) {
      return responseDispatcher.dispatchError(res, {}, error.message, 422);
    }
  }
}

const roleController = new RoleController();
export default  roleController;

  