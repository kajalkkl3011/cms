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
exports.RoleRepository = void 0;
const index_1 = __importDefault(require("../lib/db/index"));
class RoleRepository {
    /**
     * create role
     *
     * @param {*} input
     *
     */
    createUserRole(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `INSERT INTO role (role)
                      VALUES('${input['role']}')`;
            console.log(query);
            const roleId = yield new Promise((resolve, reject) => {
                index_1.default.dbConnection.query(query, [], (err, result) => {
                    if (err) {
                        reject(new Error(err));
                    }
                    resolve(result.insertId);
                });
            });
            console.log(roleId);
            return yield this.getRoleDetails(roleId);
        });
    }
    getRoleDetails(roleId) {
        const query = `SELECT * FROM role WHERE id = ${roleId}`;
        return new Promise((resolve, reject) => {
            index_1.default.dbConnection.query(query, (err, result) => {
                if (err) {
                    reject(new Error(err));
                }
                resolve(result[0]);
            });
        });
    }
}
exports.RoleRepository = RoleRepository;
const roleRepository = new RoleRepository();
exports.default = roleRepository;
