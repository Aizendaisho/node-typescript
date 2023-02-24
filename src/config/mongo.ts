import "dotenv/config"
import {connect, set} from "mongoose"
set('strictQuery', false)


async function dbConnect(): Promise<void> {
    const MONGO_KEY = <string>process.env.MONGO_KEY
    await connect(MONGO_KEY) 

}

export default dbConnect