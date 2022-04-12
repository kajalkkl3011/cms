"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const response_dispatcher_1 = __importDefault(require("../../lib/db/response-dispatcher"));
const user_repositories_1 = __importDefault(require("../../repositories/user-repositories"));
class LoginController {
    /**
     * Logged in a user
     *
     * @param {*} req
     * @param {*} res
     * @returns
     */
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = req.body;
                const response = yield user_repositories_1.default.loginUser(input);
                return response_dispatcher_1.default.dispatchSuccess(res, response, "Login Success");
            }
            catch (error) {
                return response_dispatcher_1.default.dispatchError(res, {}, error.message, 422);
            }
        });
    }
}
exports.LoginController = LoginController;
const loginController = new LoginController();
exports.default = loginController;
