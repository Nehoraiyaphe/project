import express from 'express';
import userController from './controller.product.js'

const router = express.Router()

router.get('/', userController.getAllproducts)


router.get('/:id', userController.getproductsById)


router.post('/', userController.createUser)


export default router;







// PUT localhost:8020/api/users/
//router.put('/', userController.addUser)

// DELETE localhost:8020/api/users/
//router.delete('/', userController.addUser)
