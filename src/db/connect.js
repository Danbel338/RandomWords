const {DatabaseSync} = require('node:sqlite')
const dbstring = "./src/db/db.txt"
const database = new DatabaseSync('./src/db/db.txt')

module.exports = database
