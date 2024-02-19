import express from 'express'
import expenseCategoryRoutes from './routes/expenseCategory.routes.js'
import expenseSubcategoryRoutes from './routes/expenseSubcategory.routes.js'
import userRoutes from './routes/user.routes.js'

const app = express()

//Middlewares
app.use(express.json())

app.use("/expenseCategory",expenseCategoryRoutes)
app.use("/expenseSubcategory",expenseSubcategoryRoutes)
app.use("/users", userRoutes)

export default app