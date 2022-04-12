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
exports.TopicRepository = void 0;
const index_1 = __importDefault(require("../lib/db/index"));
class TopicRepository {
    createTopic(input) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(input);
            const query = `INSERT INTO course_topics (course_id,parent_id,topic_name,topic_type,topic_description)
                       VALUES(
                           ${input['course_id']}, 
                           ${input['parent_id']},
                           '${input['topic_name']}',
                           '${input['topic_type']}',
                           '${input['topic_description']}'  
                       )`;
            const topicId = yield new Promise((resolve, reject) => {
                index_1.default.dbConnection.query(query, [], (err, result) => {
                    if (err) {
                        return reject(new Error(err));
                    }
                    resolve(result.insertId);
                });
            });
            return yield this.getUser(topicId);
        });
    }
    getUser(topicId) {
        return __awaiter(this, void 0, void 0, function* () {
            const getUserQuery = `SELECT * FROM course_topics WHERE id = ${topicId}`;
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
            const getAllUserQuery = `SELECT * FROM course_topics`;
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
exports.TopicRepository = TopicRepository;
const topicRepository = new TopicRepository();
exports.default = topicRepository;
