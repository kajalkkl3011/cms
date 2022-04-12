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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const response_dispatcher_1 = __importDefault(require("../lib/db/response-dispatcher"));
const user_repositories_1 = __importDefault(require("../repositories/user-repositories"));
function authentication(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = req.headers['authorization'];
            console.log(token);
            if (!token) {
                throw new Error('Authentication failed');
            }
            jsonwebtoken_1.default;
            var session = yield jsonwebtoken_1.default.verify(token, 'kajal_kadegiya');
            console.log(session);
            const user = yield user_repositories_1.default.getUser(session.uid);
            req.loggedInUser = user[0];
            if (!user) {
                throw new Error("Authentication failed");
            }
            next();
        }
        catch (error) {
            return response_dispatcher_1.default.dispatchError(res, {}, "Authentication failed", 400);
        }
    });
}
exports.default = authentication;
