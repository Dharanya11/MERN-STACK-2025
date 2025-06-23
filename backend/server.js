const express = require('express');
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const router = require('./routers/egRouters.js');
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json())
app.use(router)
connectDB();
app.listen(PORT, () => {
    console.log("server running on the port http://localhost:3000");
})  