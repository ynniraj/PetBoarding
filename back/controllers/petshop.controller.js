
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


const getpetbyname = async (req, res) => {
    try {
        var sortObject = {};
        var stype = req.query.sorttype;
        var sdir = req.query.sortdirection;
        sortObject[stype] = sdir;
        const petshop = await Petshop.find(sortObject).lean().exec()
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



const sortedpetshop = async (req, res) => {

    try {
        var sortObject = {};
        var stype = req.query.sorttype;
        var sdir = req.query.sortdirection;
        sortObject[stype] = sdir;
        const petshop = await Petshop.find().sort(sortObject).lean().exec()
        return res.status(200).send(petshop);

    } catch (err) {
        return res.status(500).send(err)
    }
}



const petshopupdate = async (req, res) => {
    try {
        const petshop = await Petshop.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }).lean().exec();

        return res.status(201).send(petshop)
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
}

const deletepetshop = async (req, res) => {
    try {
        const petshop = await Petshop.findByIdAndDelete(req.params.id);

        return res.status(200).send(petshop);
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
}



module.exports = { deletepetshop, petshopupdate, createpetshop, getpetshop, getpetshopbyid, getpetbyname, sortedpetshop };

