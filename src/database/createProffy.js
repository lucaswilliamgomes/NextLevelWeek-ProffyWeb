module.exports = async function(db,  {proffyValue, classValue}) {
    // inserir dados na table de proffys
    const insertedProffy = await db.run(`
    INSERT INTO proffys (
        name,
        avatar,
        instagram,
        bio
    ) VALUES (
        "${proffyValue.name}",
        "${proffyValue.avatar}",
        "${proffyValue.instagram}",
        "${proffyValue.bio}"
    );
    `)
    
    const proffy_id = insertedProffy.lastID

    // inserir dados na table de classes

    const insertedClass = await db.run (`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
    `)

}
