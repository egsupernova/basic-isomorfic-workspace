import {express , Router} from 'express'
import indexController from '../controllers'

const routes = Router()

routes.get('/', indexController.index)

module.exports = routes