import mysql from 'mysql'
import jwt from 'jsonwebtoken'
 import db from '../lib/db/index'

export class TopicRepository {
                  
    async createTopic(input: any) {
        console.log(input);
        const query = `INSERT INTO course_topics (course_id,parent_id,topic_name,topic_type,topic_description)
                       VALUES(
                           ${input['course_id']}, 
                           ${input['parent_id']},
                           '${input['topic_name']}',
                           '${input['topic_type']}',
                           '${input['topic_description']}'  
                       )`;
                      

        const topicId = await new Promise((resolve, reject) => {
            db.dbConnection.query(query, [], (err: any, result: any) => {
                if (err) {
                    return reject(new Error(err));
                }
                resolve(result.insertId);
            })
        });
    
    return await this.getUser(topicId);
}

async getUser(topicId: any) {

    const getUserQuery = `SELECT * FROM course_topics WHERE id = ${topicId}`

    return new Promise((resolve, reject) => {
        db.dbConnection.query(getUserQuery, [], (err: any, result: any) => {
            if (err) {
                reject(new Error(err));
            }
            resolve(result);
        })
    });

}
async getAllUser() {
    const getAllUserQuery = `SELECT * FROM course_topics`;
    const userdetails = await new Promise((resolve, reject) => {
        db.dbConnection.query(getAllUserQuery, [], (err: any, result: any) => {
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
       

const topicRepository = new TopicRepository();
export default topicRepository;