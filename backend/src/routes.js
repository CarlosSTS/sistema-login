const {Router} = require('express')
const User = require('./controllers/UserController')
const sessionController = require('./controllers/sessionController')

const routes = Router();

routes.post('/user', User.create)

routes.get('/user', User.index)
routes.post('/session', sessionController.index)

module.exports = routes;