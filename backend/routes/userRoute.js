import express from 'express'
import { adminLoginUser, loginUser, registerUser } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLoginUser)

export default userRouter