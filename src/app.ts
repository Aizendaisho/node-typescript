import express from "express"
import cors from "cors"
import routerHome from "./routes/home.routes"
import routerAuth from "./routes/auth.routes"
const app = express()
app.use(cors())
app.use(express.json())
app.use(routerAuth)
app.use(routerHome)


export default app