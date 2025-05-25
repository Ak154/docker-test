const express = require("express");
require("dotenv").config();
require("./config/dbConfig")
const app = express();
const cors = require("cors")

const port = process.env.PORT || 5000;

const userRoutes = require("./routes/userRoutes")

app.use(cors())
app.use(express.json())


app.use("/api/users", userRoutes)

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})