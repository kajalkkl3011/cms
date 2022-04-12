"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("router"));
const router = (0, router_1.default)();
const progress_controller_1 = __importDefault(require("../controller/auth/progress-controller"));
const authentication_1 = __importDefault(require("../middleware/authentication"));
router.route('/course/course-progress').post(authentication_1.default, progress_controller_1.default.courseprogress);
router.route('/course/course-progress').get(authentication_1.default, progress_controller_1.default.getAllUser);
exports.default = router;
