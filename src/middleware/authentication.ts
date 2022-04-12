import jwt from 'jsonwebtoken'
import responseDispatcher from '../lib/db/response-dispatcher'
import userRepository from '../repositories/user-repositories'

async function authentication(req : any, res: any, next: any) {

    try {
        const token = req.headers['authorization'];
        console.log(token);
        if (!token) {
            throw new Error('Authentication failed');
        }
        jwt

        var session = await jwt.verify(token,'kajal_kadegiya');
        console.log(session);
        

        const user: any = await userRepository.getUser(session.uid);

        req.loggedInUser = user[0]

        if (!user) {
            throw new Error("Authentication failed");
        }
        next();

    } catch (error) {
        return responseDispatcher.dispatchError(res, {}, "Authentication failed", 400);
    }
}

export default authentication;
