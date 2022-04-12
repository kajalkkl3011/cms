"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("router"));
const router = (0, router_1.default)();
const role_controller_1 = __importDefault(require("../controller/admin/role-controller"));
const authentication_1 = __importDefault(require("../middleware/authentication"));
// create a role
router.route('/role').post(authentication_1.default, role_controller_1.default.createUserRole);
exports.default = router;
