const db = require('./connect')
const sch = require('./schema')

//CRUD ->
//CREATE
//READ
//UPDATE
//DELETE



// words
const cWordQ = db.prepare(`INSERT INTO ${sch.Words.table} (${sch.Words.word}) VALUES (?)`)
const rWordQ = db.prepare(`SELECT * FROM ${sch.Words.table} WHERE ${sch.Words.id} = ?`)
const rWordsQ = db.prepare(`SELECT * FROM ${sch.Words.table}`)
const uWordQ = db.prepare(`UPDATE ${sch.Words.table} SET ${sch.Words.word} = ? WHERE ${sch.Words.id} = ?`)
const dWordQ = db.prepare(`DELETE FROM ${sch.Words.table} WHERE ${sch.Words.id} = ?`)

// phrases
const cPhraseQ = db.prepare(`INSERT INTO ${sch.Phrases.table} (${sch.Phrases.tag}) VALUES (?)`)
const rPhraseQ = db.prepare(`SELECT * FROM ${sch.Phrases.table} WHERE ${sch.Phrases.id} = ?`)
const rPhrasesQ = db.prepare(`SELECT * FROM ${sch.Phrases.table}`)
const uPhraseQ = db.prepare(`UPDATE ${sch.Phrases.table} SET ${sch.Phrases.tag} = ? WHERE ${sch.Phrases.id} = ?`)
const dPhraseQ = db.prepare(`DELETE FROM ${sch.Phrases.table} WHERE ${sch.Phrases.id} = ?`)

// phraseWords
const cPhraseWQ = db.prepare(`INSERT INTO ${sch.PhraseWords.table} (${sch.PhraseWords.phraseid}, ${sch.PhraseWords.wordid}) VALUES (?,?)`)
const rPhraseWQ = db.prepare(`SELECT * FROM ${sch.PhraseWords.table} WHERE ${sch.PhraseWords.phraseid} = ?`)
const rPhrasesWsQ = db.prepare(`SELECT * FROM ${sch.PhraseWords.table}`)
const uPhraseWQ = db.prepare(`UPDATE ${sch.PhraseWords.table} SET ${sch.PhraseWords.wordid} = ? WHERE ${sch.PhraseWords.phraseid} = ?`)
const dPhraseWQ = db.prepare(`DELETE FROM ${sch.PhraseWords.table} WHERE ${sch.PhraseWords.phraseid} = ?`)


exports.cWord = (word) => cWordQ.run(word)
exports.rWord = (id) => rWordQ.all(id)
exports.rWords = () => rWordsQ.all()
exports.uWord = (newWord, wordId) => uWordQ.run(newWord, wordId)
exports.dWord = (wordId) => dWordQ.run(wordId)

exports.cPhrase = (tag) => cPhraseQ.run(tag)
exports.rPhrase = (id) => rPhraseQ.all(id)
exports.rPhrases = () => rPhrasesQ.all()
exports.uPhrase = (newTag, PhraseId) => uPhraseQ.run(newTag, PhraseId)
exports.dPhrase = (PhraseId) => dPhraseQ.run(PhraseId)

exports.cPhraseW = (phraseid,wordid) => cPhraseWQ.run(phraseid,wordid)
exports.rPhraseW = (phraseid) => rPhraseWQ.all(phraseid)
exports.rPhrasesWs = () => rPhrasesWsQ.all()
exports.uPhraseW = (newWordId, PhraseId) => uPhraseWQ.run(newWordId, PhraseId)
exports.dPhraseW = (PhraseId) => dPhraseWQ.run(PhraseId)

/*
Crear phrase || Seleccionar phrase
Crear palabra
vincular palabra a frase


Seleccionar phrase
Listar palabras
*/


