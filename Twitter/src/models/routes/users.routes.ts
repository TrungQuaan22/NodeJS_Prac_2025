import { Router } from 'express'
import { loginController } from '~/controllers/users.controllers'
import { loginValidationMiddleware } from '~/middlewares/users.middlewares'

const userRouter = Router()

userRouter.post('/login', loginValidationMiddleware, loginController)

export default userRouter
