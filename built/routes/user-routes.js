"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("router"));
const router = (0, router_1.default)();
const authentication_1 = __importDefault(require("../middleware/authentication"));
const user_controller_1 = __importDefault(require("../controller/admin/user-controller"));
// List all users
router.route('/users').get(authentication_1.default, user_controller_1.default.getUsers);
// Get a user detail
router.route('/user/:id').get(user_controller_1.default.getUserDetailsById);
exports.default = router;
