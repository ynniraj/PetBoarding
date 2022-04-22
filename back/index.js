const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());
const connect = require('./db/db');

const { register, login, getuserbyid } = require('./controllers/user.controller')
const { createpetdetail } = require('./controllers/petdetails.controller')
const { createpetshop, getpetshop, getpetshopbyid, getpetbycity, lowsortedpetshop, highsortedpetshop, getbyverified, highrating, lowrating } = require('./controllers/petshop.controller')

app.post("/register", register)
app.get("/getpetshop", getpetshop)
app.get("/getuserbyid/:id", getuserbyid)
app.get("/getpetshopbyid/:id", getpetshopbyid)
app.post("/login", login)
app.post("/createpetshop", createpetshop)
app.post("/createpetdetail", createpetdetail)
app.get("/getpetbycity/:name", getpetbycity)
app.get("/lowsortedpetshop", lowsortedpetshop)
app.get("/highsortedpetshop", highsortedpetshop)
app.get("/highrating", highrating)
app.get("/lowrating", lowrating)
app.get("/getbyverified/:name", getbyverified)





app.listen(process.env.PORT || 8080, async () => {
    try {
        await connect()
        console.log("server is running on port 8080");
    }
    catch (e) {
        console.log(e)
    }
})
