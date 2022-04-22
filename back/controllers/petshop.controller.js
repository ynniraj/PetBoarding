
const Petshop = require('../models/petshop.model');


const getpetshop = async (req, res) => {
    try {
        const petshop = await Petshop.find().populate({ path: "petshopdetails", select: ["shopname", "summary", "petwatch", "pettypes", "petsize", "supervision", "sleep", "pottybreaks", "walks", "hometype", "outdoorsize", "emergencytransport"] }).lean().exec()
        return res.status(200).send(petshop);
    } catch (err) {
        return res.status(500).send(err)
    }
};

const getpetshopbyid = async (req, res) => {
    try {
        const petshop = await Petshop.findById(req.params.id).populate({ path: "petshopdetails", select: ["shopname", "summary", "petwatch", "pettypes", "petsize", "supervision", "sleep", "pottybreaks", "walks", "hometype", "outdoorsize", "emergencytransport"] }).lean().exec()
        return res.status(200).send(petshop);
    } catch (err) {
        return res.status(500).send(err)
    }
}


const getpetbycity = async (req, res) => {
    try {
        const petshop = await Petshop.find({ city: req.params.name }).lean().exec()
        return res.status(200).send(petshop);
    } catch (err) {
        return res.status(500).send(err)
    }
}





const createpetshop = async (req, res) => {
    try {
        const petshop = await Petshop.create(req.body);

        return res.status(200).send({ petshop, status: "ok" });
    } catch (error) {
        return res.status(404).json({ status: "error" });
    }
};


const highsortedpetshop = async (req, res) => {
    try {
        const petshop = await Petshop.find().sort({ costperday: -1 }).lean().exec()
        return res.status(200).send(petshop);

    } catch (err) {
        return res.status(500).send(err)
    }
}
const lowsortedpetshop = async (req, res) => {
    try {
        const petshop = await Petshop.find().sort({ costperday: 1 }).lean().exec()
        return res.status(200).send(petshop);

    } catch (err) {
        return res.status(500).send(err)
    }
}


const getbyverified = async (req, res) => {
    try {
        const petshop = await Petshop.find({ verified: req.params.name }).lean().exec()
        return res.status(200).send(petshop);
    } catch (err) {
        return res.status(500).send(err)
    }
}




module.exports = { createpetshop, getpetshop, getpetshopbyid, getpetbycity, lowsortedpetshop, highsortedpetshop, getbyverified };

