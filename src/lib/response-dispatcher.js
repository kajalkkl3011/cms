class ResponseDispatcher {
    dispatchSuccess(res, data = {}, message= '') {
        const response = {
            code: 200,
            data,
            message
        }

        res.setHeader('Content-Type', 'application/json');
        res.setHeader('charset', 'utf-8');
        res.writeHead(200);
        res.write(this.jsonResponse(response)); 
        res.end();
    }

    dispatchError(res, data = {}, message= ''){
        const response = {
            code: 402,
            data,
        }
        res.write(this.jsonResponse(response));
        res.end();
    }

    jsonResponse(response){
        console.log(response);
        return JSON.stringify(response);
    }
}

const responseDispatcher = new ResponseDispatcher();
module.exports = responseDispatcher;