"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const mysql_1 = __importDefault(require("mysql"));
class MySql {
    constructor() {
        this.dbConnection = mysql_1.default.createConnection({
            host: process.env.DB_HOSTNAME,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
    }
}
const db = new MySql();
exports.default = db;
