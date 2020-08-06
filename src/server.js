const express = require ('express')

const server = express()

server.use(express.static ("public"))

const pageLanding = function (req, res) {
    return res.sendFile(__dirname + "/views/index.html")
}

const pageStudy = function (req, res){
    return res.sendFile(__dirname + "/views/study.html")
}

const pageGiveClasses = function (req, res) {
    return res.sendFile(__dirname + "/views/give-classes.html")
}

server.get("/", pageLanding)
server.get("/study", pageStudy)
server.get("/give-classes", pageGiveClasses)
server.listen(5500)



