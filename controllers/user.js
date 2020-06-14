

const db = require('../models')

const show = (req, res) => {
  db.User.findById(req.params.id, (err, foundUser) => {
      if (err) return res.json({
          message: err
      })
      res.status(200).json({
          user: foundUser
      })
  })
}

module.exports = {
    show 
}


// const User = require ('../models/user');

// exports.signup = (req, res) => {
//     console.log("req.body: ", req.body)
//     const user = new User(req.body);
//     user.save((err, user) => {
//         if(err) {
//             return res.status(400).json({
//                 error
//             })
//         }
//         res.json({
//             user
//         })
//     })
// }

