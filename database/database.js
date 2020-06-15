const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI ||'mongodb+srv://ecommerce-user:TU9rShJzr9FOdBSi@cluster0-vdzbv.mongodb.net/ecommerce-final?retryWrites=true&w=majority', {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    })
    console.log('Database connection was successful')
  } catch(err) {
     console.log(err)
  }
}

module.exports = {
  
  User: require('../models/user')
}

module.exports = connectDB;