const mongoose = require("mongoose");

const connect = mongoose.connect(process.env.MONGO_URI)

const connection = mongoose.connection;

connection.on('connected', ()=>{
    console.log('Database connected')
})

connection.on('error', (error)=> {
    console.log('DB connection failed', error)
})

module.exports = mongoose;