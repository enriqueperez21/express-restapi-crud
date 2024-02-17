import express from 'express'
import expenseCategoryRoutes from './routes/expenseCategory.routes.js'

const app = express()

//Middlewares
app.use(express.json())

app.use("/expenseCategory",expenseCategoryRoutes)

export default app