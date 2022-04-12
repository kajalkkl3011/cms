import mysql from 'mysql';
import db from '../lib/db/index'

export class RoleRepository {

    /**
     * create role
     * 
     * @param {*} input 
     *  
     */
       

    async createUserRole(input){
        const query = `INSERT INTO role (role)
                      VALUES('${input['role']}')`;
                    
        console.log(query);
        
        const roleId = await new Promise((resolve, reject) => {
            db.dbConnection.query(query, [], (err, result) =>{
                if(err) {
                    reject(new Error(err));
                }
                resolve(result.insertId);
            });
        });
        console.log(roleId);

        return await this.getRoleDetails(roleId);
    }

    getRoleDetails(roleId) {
        const query = `SELECT * FROM role WHERE id = ${roleId}`;

        return new Promise((resolve, reject) => {
            db.dbConnection.query(query, (err,result) => {
                if (err) {
                    reject(new Error(err));
                }
                resolve(result[0]);
            })
        })
    }

}

const roleRepository = new RoleRepository();
export default roleRepository;