const mongooose = require('mongoose');

module.exports = () => {
    return mongooose.connect("mongodb+srv://ynniraj:1234@cluster0.k7ctl.mongodb.net/test", { useNewUrlParser: true, useUnifiedTopology: true })
}