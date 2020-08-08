


const express = require ('express')
const server = express()
const nunjucks = require ('nunjucks')
module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

nunjucks.configure ("src/views", {
    express: server,
    noCache: true
})

server

.use(express.static ("public"))

//Receber dados com o re.body
.use(express.urlencoded({extended: true}))

// Config statics archives
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)






