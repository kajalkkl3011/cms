import mysql from 'mysql'
import jwt from'jsonwebtoken'
import db from'../lib/db/index'

export class CourseassignedRepository {
                  
    async courseassigned(input) {
        
        const query = `INSERT INTO course_assigned(trainer_id,trainee_id,course_id)
                        VALUES(
                            '${input['trainer_id']}', 
                            '${input['trainee_id']}',
                            '${input['course_id']}'
                              )`;
                      

        const courseassignedId = await new Promise((resolve, reject) => {
            db.dbConnection.query(query, [], (err, result) => {
                if (err) {
                    return reject(new Error(err));
                }
                resolve(result.insertId);
            })
        });
    
    return await this.getUser(courseassignedId);
}

async getUser(courseassignedId) {

    const getUserQuery = `SELECT * FROM course_assigned WHERE id = ${courseassignedId}`

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
    const getAllUserQuery = `SELECT * FROM course_assigned`;
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

const courseassignedrepository = new CourseassignedRepository();
export default courseassignedrepository;