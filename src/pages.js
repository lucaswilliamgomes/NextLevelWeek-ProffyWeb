const Database = require('./database/db') 

const {subjects , give_matter} = require('./utils/format')


function pageLanding (req, res) {
    return res.render("index.html")
}

async function pageStudy (req, res){
    let filter = req.query

    const query = `
    SELECT classes.*, proffys.* 
    FROM proffys
    JOIN classes on (classes.proffy_id = proffys.id)
    WHERE classes.subject = '${filter.subject}';
    `
    try {
        const db = await Database
        const proffys = await db.all(query)

        return res.render("study.html", {proffys, filter, subjects})

    } catch (error) {
        console.log(error)
    }  
}

function pageGiveClasses (req, res) {
    return res.render("give-classes.html", {subjects})
}

async function saveClasses(req, res) {
    const createProffy = require('./database/createProffy')

    const proffyValue = {
        name: req.body.name,
        avatar: req.body.avatar,
        instagram: req.body.instagram,
        bio: req.body.bio
    }

    const classValue = {
        subject: req.body.subject,
        cost: req.body.cost
    }


    try {
        const db = await Database
        await createProffy (db, {proffyValue, classValue})

        return res.redirect("/study")

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
}