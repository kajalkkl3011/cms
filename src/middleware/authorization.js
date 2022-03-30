const responseDispatcher = require('../lib/response-dispatcher');
const userRepository = require('../repositories/user-repositories');
const jwt =  require('jsonwebtoken');

   

 async function authorization(req, res,next){
    try {
        const token = req.headers['authorization'];
        console.log(token);
        if(!token){
            throw new Error('Authorization failed');
        }
         try {
            var usertoken = await jwt.verify(token, 'kajal_scaletech');
              console.log(usertoken.uid);
            const users = await userRepository.fetchDetail(usertoken.uid);
             console.log(users);
            if(!users){
                throw new Error("authorization failed");
            }
            next();
        }
        catch(error){
            // console.log(error);
            return responseDispatcher.dispatchError(res, {}, error.message, 422);
        }
    } catch (error) {
        return responseDispatcher.dispatchError(res, {}, error.message, 422);
    }
}
module.exports = authorization;

    
//    try {
    // const token = req.headers['authorization'];
    // console.log(token);
    // if(!token){
    //     throw new Error('Authorization failed');
    // }

// try{
//var session = await jwt.verify(token, 'kajal_scaletech', );
//     const usersession = jwt.sign({ uid: userid },'kajal_scaletech')
//     console.log(usersession);
//     return 
   
// }
// catch (error) {
//     console.log('inside catch');
//    return responseDispatcher.dispatchError(res, {},  error.message);
// }
// }



// module.exports = authorization;