import { Router } from 'express'

import SessionsController from '../controllers/SessionsController'
import UsersController from '../controllers/UsersController'

const sessionsController = new SessionsController()
const usersController = new UsersController()

const routes = Router()

routes.post('/sessions', sessionsController.authenticate)

routes.post('/users', usersController.create)
routes.get('/users/:id', usersController.show)

export default routes
