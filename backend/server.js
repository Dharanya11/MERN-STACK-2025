const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const router = require('./routers/egRouters')
const cors = require('cors')
const todoRouter = require('./routers/todoRouters')
dotenv.config();
const app = express();
app.use(cors())
const PORT = process.env.PORT;

app.use(express.json())
app.use('/', router)
app.use('/todo', todoRouter)
connectDB();

app.listen(PORT, () => { console.log(`server running on port http://localhost:${PORT}`) })