const mysql = require('mysql');
const jwt =  require('jsonwebtoken');


class UserRepositories {
    dbConnection;

    /**
     * Connct to Database
     */
    constructor(){
        this.dbConnection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root123',
            database: 'lms'
        });

        this.dbConnection.connect((err) => {
            if(err){
                throw err;
            }
            console.log('connected');
        });
    }
    
    /**
     * Store User
     */
    async storeuser(input) {
        
        const userInsertQuery = `INSERT INTO users (user_name, password, email, first_name, last_name, contact_number)
                                VALUES(
                                    
                                    '${input['user_name']}',
                                    '${input['password']}', 
                                    '${input['email']}',
                                    '${input['first_name']}',
                                    '${input['last_name']}',
                                    ${input['contact_number']}
                                )`;

                                const userId = await new Promise((resolve, reject) => {
                                    this.dbConnection.query(userInsertQuery, [], (err, result) => {
                                        if(err){
                                            reject(err);
                                        }
                                        resolve(result.insertId);
                                    });
                                });

                                return await this.getDetailuser(userId);


    }

    getDetailuser(userId) {
        // console.log('user_name,password => ', user_name,password);
        const getuserQUery = `Select * from users where id = ${userId}`;
        return new Promise((resolve, reject) => {
            this.dbConnection.query(getuserQUery, [], (err, result) => {
                if(err)
                    reject(err);
            
                resolve(result);
            });
        });
    }
    async userAuth(input){
        const authUserQuery = `SELECT * FROM users WHERE user_name = '${input['user_name']}' AND password = '${input['password']}'`
        // console.log(authUserQuery);
        const userid = await new Promise((resolve, reject) => {
            this.dbConnection.query(authUserQuery, [], (err, result) => {
                if(err){
                    console.log('error in query');
                    reject(new Error(err));
                }
                if(result.length) {
                    resolve(result[0]);
                }
                reject(new Error('We are not able to find matching credential'));
            })
            
        })
    
        
    
        var token = jwt.sign({ uid: userid },'kajal_scaletech');
        console.log(token);
        const userloggedQuery = `INSERT INTO user_sessions (user_id, token)
                                VALUES(
                        
                                    '${userid['id']}', 
                                    '${token}'

                                    
                                )`;
                                console.log(userloggedQuery);
                            const usertoken = await new Promise((resolve, reject) => {
                                this.dbConnection.query(userloggedQuery, [], (err, result) => {
                                    if(err){
                                        // console.log('error in query');
                                        reject(new Error(err));
                                    }
                                    if(result) {
                                        resolve(result);
                                    }
                                    reject(new Error('We are not able to find matching credential'));
                                });
                            });
                            return {token: token};
                        }
                    
                   async fetchDetail(){
                    //  var token = jwt.sign({ uid: userid },'kajal_scaletech');
                    //  console.log(token);
                        const fetchUserQuery = `SELECT * FROM users`
                        const users =  await new Promise((resolve, reject) => {
                            this.dbConnection.query(fetchUserQuery, [], (err, result) => {
                               
                                if(err)
                                reject(err);
                        
                             resolve(result);
                            });

    
                        
                    
                            
                            
                        });
                        return users;
                        
                    
            }
        }

                
        
    
                    
                    
                    
                        

                

const userRepositories = new UserRepositories();
module.exports = userRepositories;