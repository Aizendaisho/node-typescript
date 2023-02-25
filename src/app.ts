import express from "express"
import cors from "cors"
import routerHome from "./routes/home.routes"
import routerAuth from "./routes/auth.routes"
import ordenRouter from "./routes/ordens.routes"
const app = express()
app.use(cors())
app.use(express.json())
//rutas
app.use(ordenRouter)
app.use(routerAuth)
app.use(routerHome)


export default app