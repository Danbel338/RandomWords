
const wordsQuery = `
CREATE TABLE IF NOT EXISTS words(
  id INTEGER PRIMARY KEY NOT NULL,
  word TEXT
);
`

const phrasesQuery = `
CREATE TABLE IF NOT EXISTS phrases(
  id INTEGER PRIMARY KEY NOT NULL,
  tag TEXT
);
`

const phraseWordsQuery = `
CREATE TABLE IF NOT EXISTS phrasewords(
  id INTEGER PRIMARY KEY NOT NULL,
  phraseid INTEGER REFERENCES phrases(id) ON DELETE CASCADE,
  wordid INTEGER REFERENCES words(id) ON DELETE CASCADE
);
`

const Words = {
  table: "words",
  id: "id",
  word: "word"
}

const Phrases = {
  table: "phrases",
  id: "id",
  tag: "tag"
}

const PhraseWords = {
  table: "phraseWords",
  id: "id",
  phraseid: "phraseid",
  wordid: "wordid"
}


module.exports = {
  wordsQuery: wordsQuery,
  phrasesQuery: phrasesQuery,
  phraseWordsQuery: phraseWordsQuery,
  Words: Words, 
  Phrases: Phrases,
  PhraseWords: PhraseWords
}
