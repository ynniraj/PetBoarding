
const mongoose = require('mongoose');

//user schema

const petShopSchema = mongoose.Schema({
    name: { type: 'string', required: true },
    city: { type: 'string', required: true },
    address: { type: 'string', required: true },
    capacity: { type: 'Number', required: true },
    costperday: { type: 'Number', required: true },
    verified: { type: 'string', required: true },
    rating: { type: 'Number', required: true },
    petshopdetails: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Petdetail",
        required: true
    }],
});

module.exports = mongoose.model('Petshop', petShopSchema);

