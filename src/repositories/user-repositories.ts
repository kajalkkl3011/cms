import mysql from 'mysql';
import jwt from'jsonwebtoken'
import db from '../lib/db'

class UserRepository {

    /**
     * Create an user
     * 
     * @param {*} input 
     */
    async createUser(input) {
        const query = `INSERT INTO users
                        (user_name, 
                        password, 
                        email, 
                        first_name, 
                        last_name, 
                        contact_number, 
                        role_id) 
                         VALUES (
                            '${input['user_name']}', 
                            '${input['password']}',
                            '${input['email']}',  
                            '${input['first_name']}', 
                            '${input['last_name']}', 
                            ${input['contact_number']},
                            ${input['role_id']}
                         )`;
                         console.log(query);

        const userId = await new Promise((resolve, reject) => {
            db.dbConnection.query(query, [], (err, result) => {
                if (err) {
                    return reject(new Error(err));
                }
                resolve(result.insertId);
            });
        });

        return await this.getUser(userId);
    }

    async getUser(userId: any) {

        const getUserQuery = `SELECT * FROM users WHERE id = ${userId}`

        return new Promise((resolve, reject) => {
            db.dbConnection.query(getUserQuery, [], (err, result) => {
                if (err) {
                    reject(new Error(err));
                }
                resolve(result);
            })
        });

    }

    async getAllUser() {
        const getAllUserQuery = `SELECT * FROM users`;
        const userdetails = await new Promise((resolve, reject) => {
            db.dbConnection.query(getAllUserQuery, [], (err, result) => {
                if (err) {
                    reject(new Error(err));
                }
                else {
                    resolve(result);
                }
            });
        });
        return userdetails;
    }

    /**
     * Login user
     * 
     * @param {*} input 
     * @returns 
     */
    async loginUser(input) {
        const authUserQuery = `SELECT * FROM users WHERE user_name = '${input['user_name']}' AND password = '${input['password']}'`;
        // console.log(authUserQuery);

        const user = await new Promise((resolve, reject) => {
            db.dbConnection.query(authUserQuery, [], (err, result) => {
                if (err) {
                    console.log('error in query');
                    reject(new Error(err));
                }
                if (result.length) {
                    resolve(result);
                }
                reject(new Error('We are not able to find matching credential'));
            })
        

        })
        // return {user};
    

    


        var token = jwt.sign({ uid: user[0].id },'kajal_kadegiya');
        

        const createUserSessionQuery = `INSERT INTO user_sessions (user_id, 
                                         token) 
                                         VALUES (${user[0].id}, 
                                            '${token}')`;
                                            

        await new Promise((resolve, reject) => {
            db.dbConnection.query(createUserSessionQuery, [], (error, result) => {
                if (error) {
                    reject(new Error(error));
                }
                resolve(result);
            });
        });
        return { token: token };
    }
}

const userRepository = new UserRepository();
export default userRepository;