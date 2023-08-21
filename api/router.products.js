import express from 'express';
import userController from './controller.product.js'

const router = express.Router()
// מקבל את כולם
router.get('/', userController.getAllproducts)

// מקבל רק אחד לפי המספר היחודי שלו
router.get('/:id', userController.getproductsById)

// מעדכן אחד חדש שאתה  רוצה
router.post('/', userController.createUser)


// מעדכן משתמש קיים
router.put('/:id',userController.putProduct)



// מוחק מוצר
router.delete('/:id',userController.deleteProduct)


// מחסרים רק אחד שאתה רוצה
// router.patch('/:id',userController.changeOne)

export default router;

