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
exports.ProgressRepository = void 0;
const index_1 = __importDefault(require("../lib/db/index"));
class ProgressRepository {
    courseprogress(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `INSERT INTO course_progress(trainee_id, topic_status, start_date, end_date)
                       VALUES(
                            '${input['trainee_id']}', 
                           '${input['topic_status']}',
                           '${input['start_date']}',
                           '${input['end_date']}'
                       )`;
            const progressId = yield new Promise((resolve, reject) => {
                index_1.default.dbConnection.query(query, [], (err, result) => {
                    if (err) {
                        return reject(new Error(err));
                    }
                    resolve(result.insertId);
                });
            });
            return yield this.getUser(progressId);
        });
    }
    getUser(progressId) {
        return __awaiter(this, void 0, void 0, function* () {
            const getUserQuery = `SELECT * FROM course_progress WHERE id = ${progressId}`;
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
            const getAllUserQuery = `SELECT * FROM course_progress`;
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
exports.ProgressRepository = ProgressRepository;
const progressrepository = new ProgressRepository();
exports.default = progressrepository;
