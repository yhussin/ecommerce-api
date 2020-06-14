const router = require('express').Router();
const ctrl = require('../controllers')



router.get('/:id', ctrl.users.show)



module.exports = router;








// let User = require('../models/user');

// const {signup} = require('../controllers/user.js')

// //router.post("/signup", signup);

// router.route('/signup', signup).post((req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;

//     const newUser = new User({
//         name, 
//         email, 
//         password, 
//     });

//     newProduct.save()
//        .then(() => res.json('You are signed up!'))
//        .catch(err => res.status(400).json('Error: ' + err));
// });

// module.exports = router;
