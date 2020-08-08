const database = require('sqlite-async')



function execute (db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            instagram TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTs classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );

    `)
}



module.exports = database.open(__dirname + '/database.sqlite').then (execute)
