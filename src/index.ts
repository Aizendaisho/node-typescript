import app from "./app"
import dbConnect from "./config/mongo"
import "dotenv/config"

const PORT = process.env.PORT || 8080


dbConnect().then(() => console.log("conecto a la db"))

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
   
})