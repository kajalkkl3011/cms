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
exports.ReferencelinkRepository = void 0;
const index_1 = __importDefault(require("../lib/db/index"));
class ReferencelinkRepository {
    createlink(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `INSERT INTO reference_links(topic_id,reference_link)
                       VALUES(
                            '${input['topic_id']}', 
                           '${input['reference_link']}'
                       )`;
            const referenceId = yield new Promise((resolve, reject) => {
                index_1.default.dbConnection.query(query, [], (err, result) => {
                    if (err) {
                        return reject(new Error(err));
                    }
                    resolve(result.insertId);
                });
            });
            return yield this.getUser(referenceId);
        });
    }
    getUser(referenceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const getUserQuery = `SELECT * FROM reference_links WHERE id = ${referenceId}`;
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
            const getAllUserQuery = `SELECT * FROM reference_links`;
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
exports.ReferencelinkRepository = ReferencelinkRepository;
const referencelinkrepository = new ReferencelinkRepository();
exports.default = referencelinkrepository;
