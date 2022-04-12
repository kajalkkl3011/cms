interface IResponse extends Response {
    setHeader:any;
    writeHead:any;
    write:any;
    end:any
}

export class ResponseDispatcher {
    dispatchSuccess(res : IResponse, data = {}, message= '', statusCode = 200) {
        const response = {
            message,
            code: statusCode,
            data,
            
        }

        res.setHeader('Content-Type', 'application/json');
        res.setHeader('charset', 'utf-8');
        res.writeHead(200);
        res.write(this.jsonResponse(response)); 
        res.end();
    }

    dispatchError(res:IResponse, data = {}, message= '', statusCode = 402){
        const response = {
            code: statusCode,
            data,
            message: message
        }
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('charset', 'utf-8');
        res.writeHead(statusCode);
        res.write(this.jsonResponse(response));
        res.end();
    }

    jsonResponse(response){
        // console.log(response);
        return JSON.stringify(response);
    }
    
}

const responseDispatcher = new ResponseDispatcher();
export default  responseDispatcher;