import { Router } from 'express'

import SessionsController from '../controllers/SessionsController'

const sessionsController = new SessionsController()

const routes = Router()

routes.post('/sessions', sessionsController.authenticate)

export default routes
