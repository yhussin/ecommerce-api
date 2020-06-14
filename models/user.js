const mongoose = require('mongoose')
// const crypto = require('crypto')
// const uuidv1 = require('uuid/v1')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Name is required'],
        maxlength: 32
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'email is required'],
        maxlength: 32
    },
    hash_password: {
        type: String,
        required: [true, 'password is required'],
    },
    salt: {
        type: String,
    },
    role: {
        type: Number,
        default: 0
    },
    purchaseHistory: {
        type: Array,
        default: []
    }
},
    { timestamps: true }
);

const User = mongoose.model('User', userSchema)
module.exports = User

// userSchema.virtual('password')
// .set(function(password) {
//     this._password = password
//     this.salt = uuidv1()
//     this.hash_password = this.encryptPassword(password)
// })
// .get(function() {
//     return this._password
// })

// userSchema.methods = {
//     encryptPassword: function(password) {
//         if(!password) return '';
//         try {
//             return crypto.createHmac('sha1', this.salt)
//                .update(password)
//                .digest('hex')
//         } catch (err) {
//             return ''
//         }
//     }
// }

// module.exports = mongoose.model('User', userSchema)