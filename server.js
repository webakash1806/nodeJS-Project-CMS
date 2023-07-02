const express = require("express")
const serverConfig = require("./configs/server.config")
const app = express()


app.get((req, res) => {

})

app.listen(serverConfig.PORT, () => {
    console.log("Server is running on Port no:" + serverConfig.PORT)
})