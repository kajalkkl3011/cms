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
exports.CourseassignedRepository = void 0;
const index_1 = __importDefault(require("../lib/db/index"));
class CourseassignedRepository {
    courseassigned(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `INSERT INTO course_assigned(trainer_id,trainee_id,course_id)
                        VALUES(
                            '${input['trainer_id']}', 
                            '${input['trainee_id']}',
                            '${input['course_id']}'
                              )`;
            const courseassignedId = yield new Promise((resolve, reject) => {
                index_1.default.dbConnection.query(query, [], (err, result) => {
                    if (err) {
                        return reject(new Error(err));
                    }
                    resolve(result.insertId);
                });
            });
            return yield this.getUser(courseassignedId);
        });
    }
    getUser(courseassignedId) {
        return __awaiter(this, void 0, void 0, function* () {
            const getUserQuery = `SELECT * FROM course_assigned WHERE id = ${courseassignedId}`;
            return new Promise((resolve, reject) => {
                index_1.default.dbConnection.query(getUserQuery, [], (err, result) => {
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
            const getAllUserQuery = `SELECT * FROM course_assigned`;
            const userdetails = yield new Promise((resolve, reject) => {
                index_1.default.dbConnection.query(getAllUserQuery, [], (err, result) => {
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
}
exports.CourseassignedRepository = CourseassignedRepository;
const courseassignedrepository = new CourseassignedRepository();
exports.default = courseassignedrepository;
