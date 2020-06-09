const express = require('express'); 
const cors = require('cors')
const connectDB = require('./database/database')

const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

connectDB();

const productsRouter = require('./routes/products');

app.use('/products', productsRouter);

app.listen(port, ()=>{
    console.log(`I am listening on port: ${port}`);
});