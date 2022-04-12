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
exports.ReferecelinkController = void 0;
const response_dispatcher_1 = __importDefault(require("../../lib/db/response-dispatcher"));
const referencelink_repository_1 = __importDefault(require("../../repositories/referencelink-repository"));
class ReferecelinkController {
    /**
     * Create a coures
     *
     * @param {*} req
     * @param {*} res
     * @returns
     */
    referencelink(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = req.body;
                const referenceDetail = yield referencelink_repository_1.default.createlink(input);
                return response_dispatcher_1.default.dispatchSuccess(res, referenceDetail, 'REFERENCELINK ADDED', 200);
            }
            catch (error) {
                return response_dispatcher_1.default.dispatchError(res, {}, error.message, 422);
            }
        });
    }
    getAllUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const myDetail = yield referencelink_repository_1.default.getAllUser();
            return response_dispatcher_1.default.dispatchSuccess(res, myDetail, '', 200);
        });
    }
}
exports.ReferecelinkController = ReferecelinkController;
const referecelinkcontroller = new ReferecelinkController();
exports.default = referecelinkcontroller;
