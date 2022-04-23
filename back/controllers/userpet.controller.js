const Userpet = require('../models/userpet.model');

const userpet = async (req, res) => {
    try {
        const userpet = await Userpet.create(req.body);

        return res.status(200).send(userpet);
    } catch (error) {
        return res.status(404).json({ status: "error" });
    }
};

const getuserpet = async (req, res) => {
    try {
        const userpet = await Userpet.find().populate({ path: "userid", select: ["username", "email", "phone", "image"] }).lean().exec()
        return res.status(200).send(userpet);
    } catch (err) {
        return res.status(500).send(err)
    }
};


const getuserpetbyid = async (req, res) => {
    try {
        const userpet = await Userpet.find({ userid: req.params.id }).lean().exec()
        return res.status(200).send(userpet);
    } catch (err) {
        return res.status(500).send(err)
    }
}




module.exports = { userpet, getuserpet, getuserpetbyid };






