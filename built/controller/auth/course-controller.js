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
exports.CourseController = void 0;
const response_dispatcher_1 = __importDefault(require("../../lib/db/response-dispatcher"));
const course_repositories_1 = __importDefault(require("../../repositories/course-repositories"));
class CourseController {
    /**
     * Create a coures
     *
     * @param {*} req
     * @param {*} res
     * @returns
     */
    createCourse(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = req.body;
                const user = req.loggedInUser;
                const courseDetail = yield course_repositories_1.default.createCourse(user, input);
                return response_dispatcher_1.default.dispatchSuccess(res, courseDetail, 'Course Created successfully.', 200);
            }
            catch (err) {
                return response_dispatcher_1.default.dispatchError(res, {}, 'already_create', 422);
            }
        });
    }
    /**
     * Get course details
     *
     * @param {*} req
     * @param {*} res
     * @returns
     */
    getCourseDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const courseDetail = yield course_repositories_1.default.getCourseDetails();
            return response_dispatcher_1.default.dispatchSuccess(res, courseDetail, 'Successful...', 200);
        });
    }
    /**
     *
     * @param {*} req
     * @param {*} res
     * @returns
     */
    getUserCourse(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const myCourseDetail = yield course_repositories_1.default.getUserCourse(req, res);
            return response_dispatcher_1.default.dispatchSuccess(res, myCourseDetail, '', 200);
        });
    }
}
exports.CourseController = CourseController;
const courseController = new CourseController();
exports.default = courseController;
