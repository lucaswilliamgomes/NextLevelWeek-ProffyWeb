// Data base 

let proffys = [
    {
        name: "Lucas",
        avatar: "https://avatars1.githubusercontent.com/u/62778691?s=460&u=a8c535cfa9213502698b84d45a8424312fa51a3f&v=4",
        instagram: "lucaswilliam_g",
        bio: "Loucura, loucura meus amigos",
        subject: "Matemática",
        cost: 35
    },
    {
        name: "paulo",
        avatar: "https://avatars1.githubusercontent.com/u/62778691?s=460&u=a8c535cfa9213502698b84d45a8424312fa51a3f&v=4",
        instagram: "lucaswilliam_g",
        bio: "Jesus está no Monte das Oliveiras ensinando, quando de repente se levanta e diz: <br>y = 3x² + 2x - 3. <br>Espantado, um de seus discípulos pergunta <br>O que é isso, Mestre?<br>Ao que Jesus responde: Calma, é apenas mais uma parábola...",
        subject: "Matemática",
        cost: 35
    }
]




const express = require ('express')
const server = express()
const nunjucks = require ('nunjucks')

nunjucks.configure ("src/views", {
    express: server,
    noCache: true
})

const pageLanding = function (req, res) {
    return res.render("index.html")
}

const pageStudy = function (req, res){
    return res.render("study.html", {proffys})
}

const pageGiveClasses = function (req, res) {
    return res.render("give-classes.html")
}

server.use(express.static ("public"))
// Config statics archives
server.get("/", pageLanding)
server.get("/study", pageStudy)
server.get("/give-classes", pageGiveClasses)
server.listen(5500)






