"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseDispatcher = void 0;
class ResponseDispatcher {
    dispatchSuccess(res, data = {}, message = '', statusCode = 200) {
        const response = {
            message,
            code: statusCode,
            data,
        };
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('charset', 'utf-8');
        res.writeHead(200);
        res.write(this.jsonResponse(response));
        res.end();
    }
    dispatchError(res, data = {}, message = '', statusCode = 402) {
        const response = {
            code: statusCode,
            data,
            message: message
        };
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('charset', 'utf-8');
        res.writeHead(statusCode);
        res.write(this.jsonResponse(response));
        res.end();
    }
    jsonResponse(response) {
        // console.log(response);
        return JSON.stringify(response);
    }
}
exports.ResponseDispatcher = ResponseDispatcher;
const responseDispatcher = new ResponseDispatcher();
exports.default = responseDispatcher;
