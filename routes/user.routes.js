import {Router} from 'express'
import { Allusers, allUserData, oneUser } from '../controllers/user.controllers.js'

const router = Router()

router.get("/", Allusers)

router.get("/byEmail/:email", oneUser)

router.get("/allData/byEmail/:email", allUserData)

export default router