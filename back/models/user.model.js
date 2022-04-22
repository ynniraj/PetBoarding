
const mongoose = require('mongoose');

//user schema

const userSchema = mongoose.Schema({
    username: { type: 'string', required: true },
    email: { type: 'string', required: true },
    phone: { type: 'Number', required: true },
    password: { type: 'string', required: true },
    image: { type: 'string', required: false },

});

module.exports = mongoose.model('User', userSchema);


