import mysql from 'mysql'
import jwt from 'jsonwebtoken'
import db from'../lib/db/index'

export class ReferencelinkRepository {
                  
    async createlink(input) {
        
        const query = `INSERT INTO reference_links(topic_id,reference_link)
                       VALUES(
                            '${input['topic_id']}', 
                           '${input['reference_link']}'
                       )`;
                      
                      

        const referenceId = await new Promise((resolve, reject) => {
            db.dbConnection.query(query, [], (err, result) => {
                if (err) {
                    return reject(new Error(err));
                }
                resolve(result.insertId);
            })
        });
    
    return await this.getUser(referenceId);
}

async getUser(referenceId) {

    const getUserQuery = `SELECT * FROM reference_links WHERE id = ${referenceId}`

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
    const getAllUserQuery = `SELECT * FROM reference_links`;
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

const referencelinkrepository = new ReferencelinkRepository();
export default referencelinkrepository;