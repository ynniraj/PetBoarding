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
        const userpet = await Userpet.find({ userid: req.params.id }).populate({ path: "petshopdetail", select: ["name", "city", "address", "costperday", "verified", "rating", "image"] }).lean().exec()
        return res.status(200).send(userpet);
    } catch (err) {
        return res.status(500).send(err)
    }
}


const adminuserdetails = async (req, res) => {
    try {
        const userpet = await Userpet.findById(req.params.id).populate({ path: "userid", select: ["username", "email", "phone", "image"] }).populate({ path: "petshopdetail", select: ["name", "city", "address", "costperday", "verified", "rating", "image"] }).lean().exec()
        return res.status(200).send(userpet);
    } catch (err) {
        return res.status(500).send(err)
    }
}

const adminpatch = async (req, res) => {
    try {
        const userpet = await Userpet.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }).lean().exec();

        return res.status(201).send(userpet)
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
}


module.exports = { userpet, getuserpet, getuserpetbyid, adminuserdetails, adminpatch };






