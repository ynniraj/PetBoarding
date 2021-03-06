const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());
const connect = require('./db/db');

const { register, login, getuserbyid } = require('./controllers/user.controller')
const { createpetdetail } = require('./controllers/petdetails.controller')
const { userpet, getuserpet, getuserpetbyid, adminuserdetails, adminpatch } = require('./controllers/userpet.controller')
const { deletepetshop, petshopupdate, createpetshop, getpetshop, getpetshopbyid, getpetbyname, sortedpetshop } = require('./controllers/petshop.controller')
const { sendnotification } = require("./whatsapp")


app.post("/register", register)
app.get("/getpetshop", getpetshop)
app.get("/getuserbyid/:id", getuserbyid)
app.get("/getpetshopbyid/:id", getpetshopbyid)
app.post("/login", login)
app.post("/createpetshop", createpetshop)
app.post("/createpetdetail", createpetdetail)
app.get("/getpetbyname", getpetbyname)
app.get("/sortedpetshop", sortedpetshop)
// app.get("/getbyverified/:name", getbyverified)
app.post("/userpet", userpet)
app.get("/getuserpet", getuserpet)
app.get("/getuserpetbyid/:id", getuserpetbyid)
app.get("/adminuserdetails/:id", adminuserdetails)
app.patch("/adminpatch/:id", adminpatch)
app.patch("/petshopupdate/:id", petshopupdate)
app.delete("/deletepetshop/:id", deletepetshop)
app.post("/sendnotification", sendnotification)






app.listen(process.env.PORT || 8080, async () => {
    try {
        await connect()
        console.log("server is running on port 8080");
    }
    catch (e) {
        console.log(e)
    }
})
