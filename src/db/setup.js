const database = require('./connect')
const schema = require('./schema')

function initdb(){
  database.exec(`
    ${schema.wordsQuery}\n
    ${schema.phrasesQuery}\n
    ${schema.phraseWordsQuery}
  `)
}

try {
  initdb()
} catch (e){
  console.log("DB SETUP ERROR: ", e)
}

module.exports = database

