import finalhandler from 'finalhandler'
import http from 'http'
import Router from 'router'

import authRoutes from './routes/auth-routes'
import courseRoutes from './routes/course-routes'
import courseprogressRoutes from './routes/course-progress-routes'
import courseassignedRoutes from './routes/course_assigned'
import roleRoutes from './routes/role-routes'
import referencelinkRoutes from './routes/referencelink-route'
import topicRoutes from './routes/topic-routes'
import userRoutes from './routes/user-routes'



import bodyParser from 'body-parser'
require('dotenv').config();

const port = process.env.PORT || 9008 ;
 const router = Router();
router.use(bodyParser.json());

 

// Project Routes
router.use('/',authRoutes);
router.use('/',courseRoutes);
router.use('/',roleRoutes);
router.use('/',userRoutes);
router.use('/',topicRoutes);
router.use('/',referencelinkRoutes);
router.use('/',courseprogressRoutes);
router.use('/',courseassignedRoutes);


const server = http.createServer((req:any, res:any) => {
 router(req, res, finalhandler(req, res));
});

server.listen(port, () => {
    console.log(`Server is runnning at port : ${port}`);
})
