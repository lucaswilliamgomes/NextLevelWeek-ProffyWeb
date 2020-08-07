// Data base 

let proffys = [
    {
        name: "Lucas",
        avatar: "https://avatars1.githubusercontent.com/u/62778691?s=460&u=a8c535cfa9213502698b84d45a8424312fa51a3f&v=4",
        instagram: "lucaswilliam_g",
        bio: "Loucura, loucura meus amigos",
        subject: "Matemática",
        cost: 35
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]


const express = require ('express')
const server = express()




function give_matter (subjectNumber) {
    return subjects[subjectNumber - 1]
}
    

const pageLanding = function (req, res) {
    return res.render("index.html")
}

const pageStudy = function (req, res){
    let filter = req.query
    return res.render("study.html", {proffys, filter, subjects})
}

const pageGiveClasses = function (req, res) {
    let data = req.query

    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {

        data.subject = give_matter(data.subject)
        proffys.push(data)
    
        return res.redirect("/study")
    }   

    return res.render("give-classes.html")
}

const nunjucks = require ('nunjucks')
nunjucks.configure ("src/views", {
    express: server,
    noCache: true
})


server.use(express.static ("public"))

// Config statics archives
server.get("/", pageLanding)
server.get("/study", pageStudy)
server.get("/give-classes", pageGiveClasses)
server.listen(5500)






