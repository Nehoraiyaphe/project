import express from 'express';
import userController from './controller.users.js'

const users = express.Users()

// מקבל רק משתמש אחד לפי ה id 
router.get('/:id', userController.getUsersById)


export default users;