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
const db_1 = __importDefault(require("../lib/db"));
class UserRepository {
    /**
     * Create an user
     *
     * @param {*} input
     */
    createUser(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `INSERT INTO users
                        (user_name, 
                        password, 
                        email, 
                        first_name, 
                        last_name, 
                        contact_number, 
                        role_id) 
                         VALUES (
                            '${input['user_name']}', 
                            '${input['password']}',
                            '${input['email']}',  
                            '${input['first_name']}', 
                            '${input['last_name']}', 
                            ${input['contact_number']},
                            ${input['role_id']}
                         )`;
            console.log(query);
            const userId = yield new Promise((resolve, reject) => {
                db_1.default.dbConnection.query(query, [], (err, result) => {
                    if (err) {
                        return reject(new Error(err));
                    }
                    resolve(result.insertId);
                });
            });
            return yield this.getUser(userId);
        });
    }
    getUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const getUserQuery = `SELECT * FROM users WHERE id = ${userId}`;
            return new Promise((resolve, reject) => {
                db_1.default.dbConnection.query(getUserQuery, [], (err, result) => {
                    if (err) {
                        reject(new Error(err));
                    }
                    resolve(result);
                });
            });
        });
    }
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllUserQuery = `SELECT * FROM users`;
            const userdetails = yield new Promise((resolve, reject) => {
                db_1.default.dbConnection.query(getAllUserQuery, [], (err, result) => {
                    if (err) {
                        reject(new Error(err));
                    }
                    else {
                        resolve(result);
                    }
                });
            });
            return userdetails;
        });
    }
    /**
     * Login user
     *
     * @param {*} input
     * @returns
     */
    loginUser(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const authUserQuery = `SELECT * FROM users WHERE user_name = '${input['user_name']}' AND password = '${input['password']}'`;
            // console.log(authUserQuery);
            const user = yield new Promise((resolve, reject) => {
                db_1.default.dbConnection.query(authUserQuery, [], (err, result) => {
                    if (err) {
                        console.log('error in query');
                        reject(new Error(err));
                    }
                    if (result.length) {
                        resolve(result);
                    }
                    reject(new Error('We are not able to find matching credential'));
                });
            });
            // return {user};
            var token = jsonwebtoken_1.default.sign({ uid: user[0].id }, 'kajal_kadegiya');
            const createUserSessionQuery = `INSERT INTO user_sessions (user_id, 
                                         token) 
                                         VALUES (${user[0].id}, 
                                            '${token}')`;
            yield new Promise((resolve, reject) => {
                db_1.default.dbConnection.query(createUserSessionQuery, [], (error, result) => {
                    if (error) {
                        reject(new Error(error));
                    }
                    resolve(result);
                });
            });
            return { token: token };
        });
    }
}
const userRepository = new UserRepository();
exports.default = userRepository;
