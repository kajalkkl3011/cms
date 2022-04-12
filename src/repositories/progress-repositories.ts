 import mysql from'mysql'
 import jwt from'jsonwebtoken'
 import db from'../lib/db/index'

export class ProgressRepository {
                  
    async courseprogress(input) {
        
        const query = `INSERT INTO course_progress(trainee_id, topic_status, start_date, end_date)
                       VALUES(
                            '${input['trainee_id']}', 
                           '${input['topic_status']}',
                           '${input['start_date']}',
                           '${input['end_date']}'
                       )`;
                       
                      

        const progressId = await new Promise((resolve, reject) => {
            db.dbConnection.query(query, [], (err, result) => {
                if (err) {
                    return reject(new Error(err));
                }
                resolve(result.insertId);
            })
        });
    
    return await this.getUser(progressId);
}

async getUser(progressId) {

    const getUserQuery = `SELECT * FROM course_progress WHERE id = ${progressId}`

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
    const getAllUserQuery = `SELECT * FROM course_progress`;
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
} 

       

const progressrepository = new ProgressRepository();
export default progressrepository;