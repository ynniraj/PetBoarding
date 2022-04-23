
const mongoose = require('mongoose');

//user schema

const userpetSchema = mongoose.Schema({
    name: { type: 'string', required: true },
    pettype: { type: 'string', required: true },
    startdate: { type: 'string', required: true },
    enddate: { type: 'string', required: true },
    status: { type: 'string', required: true, default: 'pending' },
    userid: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }],
});

module.exports = mongoose.model('Userpet', userpetSchema);


