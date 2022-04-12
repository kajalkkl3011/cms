"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("router"));
const router = (0, router_1.default)();
const referencelink_contoller_1 = __importDefault(require("../controller/auth/referencelink-contoller"));
const authentication_1 = __importDefault(require("../middleware/authentication"));
router.route('/course/reference-link').post(authentication_1.default, referencelink_contoller_1.default.referencelink);
router.route('/course/reference-link').get(authentication_1.default, referencelink_contoller_1.default.getAllUser);
exports.default = router;
