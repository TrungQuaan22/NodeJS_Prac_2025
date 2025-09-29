import { Router } from 'express'
import { registerController } from '~/controllers/users.controllers'
import { loginController } from '~/controllers/users.controllers'
import { loginValidationMiddleware } from '~/middlewares/users.middlewares'

const userRouter = Router()

userRouter.post('/login', loginValidationMiddleware, loginController)
userRouter.post('/register', loginValidationMiddleware, registerController)

export default userRouter
