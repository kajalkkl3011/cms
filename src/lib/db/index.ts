require('dotenv').config();
import mysql from'mysql'

class MySql {
    dbConnection

    constructor() {
        this.dbConnection = mysql.createConnection({
            host: process.env.DB_HOSTNAME,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
    }   
}

const db = new MySql();
export default  db;