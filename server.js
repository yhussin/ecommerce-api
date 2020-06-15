const express = require('express'); 
const cors = require('cors')
const connectDB = require('./database/database')
//const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
//const routes = require('./routes')

const app = express();
const port = process.env.PORT || 5000

const corsOptions = {
    origin: [
        `http://localhost:3000`, 
        `https://wall-art.herokuapp.com`],
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());
//app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

connectDB();

const productsRouter = require('./routes/products');
//const users = require('./routes/user')

app.use('/products', productsRouter);
//app.use('/users', routes.users)

app.listen(port, ()=>{
    console.log(`I am listening on port: ${port}`);
});