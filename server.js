const express = require("express")
const serverConfig = require("./configs/server.config")
const mongoose = require('mongoose')
const dbConfig = require("./configs/db.config")
const userModel = require("./models/user.model")
const bcrypt = require('bcrypt');

const app = express()


//logic to connect with mongoDB
mongoose.connect(dbConfig.DB_URL)

const db = mongoose.connection

db.on("error", () => {
    console.log('Error in Connection')
})


db.once("open", () => {
    console.log('Database is connected')

    init()
})

async function init() {

    let admin = await userModel.findOne({
        userId: "admin"
    })

    if (admin) {
        console.log("Data Already Exist")
    }

    //created ADMIN user
    admin = await userModel.create({
        name: "Akash Kumar Singh",
        userId: "admin1",
        email: "webakash18.06@gmail.com",
        userType: "ADMIN",
        password: bcrypt.hashSync("Welcome", 8)
    })
    console.log(admin)
}

app.listen(serverConfig.PORT, () => {
    console.log("Server is running on Port no:" + serverConfig.PORT)
})