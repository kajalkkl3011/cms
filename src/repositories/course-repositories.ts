import mysql from 'mysql'
import jwt from 'jsonwebtoken'
import db from '../lib/db/index'

class CourseRepository {
                  
    async createCourse(user,input) {
        const query = `INSERT INTO courses (course_name, image, creator_id)
                       VALUES(
                           
                           '${input['course_name']}', 
                           '${input['image']}',
                           '${user['id']}' 
                           
                       )`;
console.log(query);
        const courseId:number = await new Promise((resolve, reject) => {
            db.dbConnection.query(query, [], (err, result) => {
                if (err) {
                    return reject(new Error(err));
                }
                resolve(result.insertId);
            })
        });

        return await this.getCourseDetails();
    }

    getCourseDetailsById(courseId) {
        const query = `SELECT * FROM courses WHERE id = ${courseId}`;

        return new Promise((resolve, reject) => {
            db.dbConnection.query(query, (err, result) => {
                if (err) {
                    reject(new Error(err));
                }
                resolve(result[0]);
            })
        })
    }

    getCourseDetails() {
        const query = `SELECT 
            courses.id, courses.course_name, users.user_name AS creator 
            FROM courses 
            INNER JOIN users 
            ON courses.id = users.id`;
        return new Promise((resolve, reject) => {
            db.dbConnection.query(query, (err, result) => {
                if (err) {
                    reject(new Error(err));
                }
                resolve(result)
            })
        })
    }

    async getUserCourse(req, res) {
        const query = `SELECT 
            courses.id, courses.name 
            FROM courses 
            INNER JOIN users 
            ON courses.id = users.id 
            WHERE users.id = ${req.loggedInUser.id}`

        return new Promise((resolve, reject) => {
            db.dbConnection.query(query, (err, result) => {
                if (err) {
                    reject(new Error(err));
                }
                resolve(result);
            })
        });
    }
}

const courseRepository = new CourseRepository();
export default courseRepository;
