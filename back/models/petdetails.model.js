
const mongoose = require('mongoose');

//user schema

const petDetailsSchema = mongoose.Schema({
    shopname: { type: 'string', required: true },
    summary: { type: 'string', required: false, default: 'Boarding facilities you leave em we love them' },
    petwatch: { type: 'Number', required: true },
    pettypes: { type: 'string', required: true },
    petsize: { type: 'string', required: true },
    supervision: { type: 'string', required: false, default: 'Yes' },
    sleep: { type: 'string', required: false, default: 'Wherever they want' },
    pottybreaks: { type: 'string', required: false, default: 'Full access outside' },
    walks: { type: 'Number', required: true },
    hometype: { type: 'string', required: true },
    outdoorsize: { type: 'string', required: true },
    emergencytransport: { type: 'string', required: true },
});

module.exports = mongoose.model('Petdetail', petDetailsSchema);


