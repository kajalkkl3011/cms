"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("router"));
const router = (0, router_1.default)();
const course_controller_1 = __importDefault(require("../controller/auth/course-controller"));
const authentication_1 = __importDefault(require("../middleware/authentication"));
router.route('/course/create-course').post(authentication_1.default, course_controller_1.default.createCourse);
router.route('/course/list-courses').get(authentication_1.default, course_controller_1.default.getCourseDetails);
router.route('/course/list-user-courses').get(authentication_1.default, course_controller_1.default.getUserCourse);
exports.default = router;
