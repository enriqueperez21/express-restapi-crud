import {Router} from 'express'
import { createExpenseCategory, deleteExpenseCategory, getExpenseCategory, getOneExpenseCategory, getSomeExpenseCategory, updateExpenseCategory } from '../controllers/expenseCategory.controllers.js'


const router = Router()

router.get("",getExpenseCategory)

router.post("", createExpenseCategory)

router.put("/:id", updateExpenseCategory)

router.delete("/:id", deleteExpenseCategory)

router.get("/:id", getOneExpenseCategory)

router.get("/getSomes", getSomeExpenseCategory)

router.get("/", (req, res)=>{
    res.send("Te amo mucho cariño <3, mi esposa")
})

export default router