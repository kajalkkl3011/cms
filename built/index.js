"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const finalhandler_1 = __importDefault(require("finalhandler"));
const http_1 = __importDefault(require("http"));
const router_1 = __importDefault(require("router"));
const auth_routes_1 = __importDefault(require("./routes/auth-routes"));
const course_routes_1 = __importDefault(require("./routes/course-routes"));
const course_progress_routes_1 = __importDefault(require("./routes/course-progress-routes"));
const course_assigned_1 = __importDefault(require("./routes/course_assigned"));
const role_routes_1 = __importDefault(require("./routes/role-routes"));
const referencelink_route_1 = __importDefault(require("./routes/referencelink-route"));
const topic_routes_1 = __importDefault(require("./routes/topic-routes"));
const user_routes_1 = __importDefault(require("./routes/user-routes"));
const body_parser_1 = __importDefault(require("body-parser"));
require('dotenv').config();
const port = process.env.PORT || 9008;
const router = (0, router_1.default)();
router.use(body_parser_1.default.json());
// Project Routes
router.use('/', auth_routes_1.default);
router.use('/', course_routes_1.default);
router.use('/', role_routes_1.default);
router.use('/', user_routes_1.default);
router.use('/', topic_routes_1.default);
router.use('/', referencelink_route_1.default);
router.use('/', course_progress_routes_1.default);
router.use('/', course_assigned_1.default);
const server = http_1.default.createServer((req, res) => {
    router(req, res, (0, finalhandler_1.default)(req, res));
});
server.listen(port, () => {
    console.log(`Server is runnning at port : ${port}`);
});
