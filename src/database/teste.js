const db = require('./db')
const createProffy = require('./createProffy')

db.then(async db => {
    // Inserir dados

    proffyValue = {
        name: 'Lucas',
        avatar: 'https://avatars1.githubusercontent.com/u/62778691?s=460&u=a8c535cfa9213502698b84d45a8424312fa51a3f&v=4',
        instagram: 'lucaswilliam_g',
        bio: 'Apixonado por tecnologia e em aprender sempre mais! :)',
    }

    classValue = {
        subject: 1,
        cost: "29.99",
        // O proofy id virá pelo banco de dados
    }
    
    await createProffy (db, {proffyValue, classValue})


    // Consultar dados


    // Todos os proffys
    selectedProffys = await db.all("SELECT * FROM proffys")

    // Consultar as classes de um proffy 
    // Trazer junto os dados do proffy

    const selectedClassesAndProffys = await db.all(`
    SELECT classes.*,proffys.* 
    FROM proffys
    JOIN classes on (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
    `)

    console.log(selectedClassesAndProffys)
})

