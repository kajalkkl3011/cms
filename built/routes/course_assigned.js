"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("router"));
const router = (0, router_1.default)();
const courseassigned_cotroller_1 = __importDefault(require("../controller/auth/courseassigned-cotroller"));
const authentication_1 = __importDefault(require("../middleware/authentication"));
router.route('/course/course-assigned').post(authentication_1.default, courseassigned_cotroller_1.default.courseassigned);
router.route('/course/course-assigned').get(authentication_1.default, courseassigned_cotroller_1.default.getAllUser);
exports.default = router;
