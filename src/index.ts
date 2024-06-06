import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import UserRouter from './routers/UserRouter'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/user',UserRouter)

app.listen(3355,()=>console.log("### Server Is UP #####"));