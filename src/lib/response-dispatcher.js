class ResponseDispatcher {
    dispatchSuccess(res, data = {}, message= '', code = 200) {
        const response = {
            message,
            data,
            code
        }

        res.setHeader('Content-Type', 'application/json');
        res.setHeader('charset', 'utf-8');
        res.writeHead(code);
        res.write(this.jsonResponse(response)); 
        res.end();
    }

    dispatchError(res, data = {}, message= '', code = 422){
        const response = {
            message,
            data,
            code
        }
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('charset', 'utf-8');
        res.writeHead(code);
        res.write(this.jsonResponse(response));
        res.end();
    }

    jsonResponse(response){
        return JSON.stringify(response);
    }
}

const responseDispatcher = new ResponseDispatcher();
module.exports = responseDispatcher;