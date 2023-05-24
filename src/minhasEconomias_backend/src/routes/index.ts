import { Router } from 'express'

import SessionsController from '../controllers/SessionsController'
import UsersController from '../controllers/UsersController'
import MovementsController from '../controllers/MovementsController'

const sessionsController = new SessionsController()
const usersController = new UsersController()
const movementsController = new MovementsController()

const routes = Router()

routes.post('/sessions', sessionsController.authenticate)

routes.post('/users', usersController.create)
routes.get('/users/:id', usersController.show)
routes.put('/users/:id', usersController.edit)

routes.post('/movements', movementsController.create)
routes.get('/movements/user/:idUser', movementsController.show)
routes.put('/movements/:id', movementsController.edit)
routes.delete('/movements/:id', movementsController.delete)

export default routes
