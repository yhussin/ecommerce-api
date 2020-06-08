const express = require('express'); 
const app = express();
const port = process.env.PORT || 5000
const connectDB = require('./database/database')

connectDB();

app.listen(port, ()=>{
    console.log(`I am listening on port: ${port}`);
});