import express from 'express'
import expenseCategoryRoutes from './routes/expenseCategory.routes.js'
import expenseSubcategoryRoutes from './routes/expenseSubcategory.routes.js'

const app = express()

//Middlewares
app.use(express.json())

app.use("/expenseCategory",expenseCategoryRoutes)
app.use("/expenseSubcategory",expenseSubcategoryRoutes)

export default app