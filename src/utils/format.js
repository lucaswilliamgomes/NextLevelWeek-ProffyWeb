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

function give_matter (subjectNumber) {
    return subjects[subjectNumber - 1]
}
  

module.exports = { subjects , give_matter}