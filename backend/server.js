const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({path:"config/config.env"})
const connectDB= require("./config/database");
const PORT = process.env.PORT || 5050;


connectDB();

app.listen(PORT,()=>{
    console.log(`Server is working on http://localhost:${PORT}`)
})