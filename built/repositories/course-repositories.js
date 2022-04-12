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
const index_1 = __importDefault(require("../lib/db/index"));
class CourseRepository {
    createCourse(user, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `INSERT INTO courses (course_name, image, creator_id)
                       VALUES(
                           
                           '${input['course_name']}', 
                           '${input['image']}',
                           '${user['id']}' 
                           
                       )`;
            console.log(query);
            const courseId = yield new Promise((resolve, reject) => {
                index_1.default.dbConnection.query(query, [], (err, result) => {
                    if (err) {
                        return reject(new Error(err));
                    }
                    resolve(result.insertId);
                });
            });
            return yield this.getCourseDetails();
        });
    }
    getCourseDetailsById(courseId) {
        const query = `SELECT * FROM courses WHERE id = ${courseId}`;
        return new Promise((resolve, reject) => {
            index_1.default.dbConnection.query(query, (err, result) => {
                if (err) {
                    reject(new Error(err));
                }
                resolve(result[0]);
            });
        });
    }
    getCourseDetails() {
        const query = `SELECT 
            courses.id, courses.course_name, users.user_name AS creator 
            FROM courses 
            INNER JOIN users 
            ON courses.id = users.id`;
        return new Promise((resolve, reject) => {
            index_1.default.dbConnection.query(query, (err, result) => {
                if (err) {
                    reject(new Error(err));
                }
                resolve(result);
            });
        });
    }
    getUserCourse(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `SELECT 
            courses.id, courses.name 
            FROM courses 
            INNER JOIN users 
            ON courses.id = users.id 
            WHERE users.id = ${req.loggedInUser.id}`;
            return new Promise((resolve, reject) => {
                index_1.default.dbConnection.query(query, (err, result) => {
                    if (err) {
                        reject(new Error(err));
                    }
                    resolve(result);
                });
            });
        });
    }
}
const courseRepository = new CourseRepository();
exports.default = courseRepository;
