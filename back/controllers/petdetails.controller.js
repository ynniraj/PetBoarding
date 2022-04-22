const Petdetail = require('../models/petdetails.model');

const createpetdetail = async (req, res) => {
    try {
        const petshop = await Petdetail.create(req.body);

        return res.status(200).send({ petshop, status: "ok" });
    } catch (error) {
        return res.status(404).json({ status: "error" });
    }
};
module.exports = { createpetdetail };




// const getflats = async (req, res) => {
//     try {
//         const flat = await Flat.find().populate({ path: "resident", select: ["name", "gender", "age"] }).lean().exec()
//         return res.status(200).send(flat);

//     } catch (err) {
//         return res.status(500).send(err)
//     }
// }

// //get request ueing params id
// const getbyidflat = async (req, res) => {
//     try {
//         const flet = await Flat.findById(req.params.id).populate({ path: "resident", select: ["name", "gender", "age"] }).lean().exec()
//         return res.status(200).send(flet);
//     } catch (err) {
//         return res.status(500).send(err)
//     }
// }



// //pagination using query params
// const getFlatspagination = async (req, res) => {
//     try {
//         const { page, limit } = req.query;
//         const flat = await Flat.find().populate({ path: "resident", select: ["name", "gender", "age"] }).lean().exec()
//         const total = flat.length;
//         const totalPages = Math.ceil(total / limit);
//         const pageData = flat.slice((page - 1) * limit, page * limit);
//         return res.status(200).send({ pageData, totalPages });
//     } catch (err) {
//         return res.status(500).send(err)
//     }
// }


// const highsortedflat = async (req, res) => {
//     try {
//         const { page, limit } = req.query;
//         const flat = await Flat.find().populate({ path: "resident", select: ["name", "gender", "age"] }).sort({ flatno: -1 }).lean().exec()
//         const total = flat.length;
//         const totalPages = Math.ceil(total / limit);
//         const pageData = flat.slice((page - 1) * limit, page * limit);
//         return res.status(200).send({ pageData, totalPages });

//     } catch (err) {
//         return res.status(500).send(err)
//     }
// }
// const lowsortedflat = async (req, res) => {
//     try {
//         const { page, limit } = req.query;

//         const flat = await Flat.find().populate({ path: "resident", select: ["name", "gender", "age"] }).sort({ flatno: 1 }).lean().exec()
//         const total = flat.length;
//         const totalPages = Math.ceil(total / limit);
//         const pageData = flat.slice((page - 1) * limit, page * limit);
//         return res.status(200).send({ pageData, totalPages });

//     } catch (err) {
//         return res.status(500).send(err)
//     }
// }


// const blockname = async (req, res) => {
//     try {
//         const flat = await Flat.find({ block: req.params.name }).populate({ path: "resident", select: ["name", "gender", "age"] }).lean().exec()
//         return res.status(200).send(flat);
//     } catch (err) {
//         return res.status(500).send(err)
//     }
// }

// const byflattype = async (req, res) => {
//     try {
//         const flat = await Flat.find({ type: req.params.name }).populate({ path: "resident", select: ["name", "gender", "age"] }).lean().exec()
//         return res.status(200).send(flat);
//     } catch (err) {
//         return res.status(500).send(err)
//     }
// }


