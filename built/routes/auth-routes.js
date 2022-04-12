"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("router"));
const router = (0, router_1.default)();
const register_controller_1 = __importDefault(require("../controller/auth/register-controller"));
;
const login_controller_1 = __importDefault(require("../controller/auth/login-controller"));
// Register a user
router.route('/register').post(register_controller_1.default.registerUser);
// Login
router.route('/login').post(login_controller_1.default.loginUser);
exports.default = router;
