const http = require('http')
const Router = require('router');
const finalhandler = require('finalhandler');
const routes = require('./router/routes')

const router = Router();
router.use('/', routes)

const server = http.createServer((req, res) => {
 router(req, res, finalhandler(req, res));
});

server.listen(9008, () => console.log('> Server is  running on port : 9008'))
