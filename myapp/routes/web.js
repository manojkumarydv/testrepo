import express from 'express'
import UserController from '../controllers/userController.js'
const router = express.Router()


router.get('/',UserController.home)

router.get('/registration',UserController.registration)     //read
router.post('/registration',UserController.createUserDoc)    //create

router.get('/login',UserController.login)     //read
router.post('/login',UserController.verifyLogin)     //create


export default router