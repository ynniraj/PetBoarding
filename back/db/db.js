const mongooose = require('mongoose');

module.exports = () => {
    return mongooose.connect("mongodb://localhost:27017/petboarding", { useNewUrlParser: true, useUnifiedTopology: true })
}