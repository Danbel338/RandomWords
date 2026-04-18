require('dotenv').config()
const express = require('express')
const router = express.Router()
const sch = require('../db/schema')
const api = require('../db/queries')


function phrasesPage() {
  return `
    <h1> PHRASES </h1>

    <br>
    <br>

    <a href="/phrases/phraselist">
      <button>Phrases list</button>
    </a>

    <br>
    <br>

    <form method='post'>
      <label for="tag">tag</label>
      <br>
      <input type="text" id="tag" name="tag">
      <br>
      <input type="submit">
    </form>
  `
}

function phrasePage(phraseid) {
  let words = ``
  const rows = api.rPhraseW(phraseid)
  for (let i = 0; i<rows.length; i++){
    const item = rows[i]
    const word = api.rWord(item.wordid)[0].word
    words += word + " "
  }

  let page = `
  <form method=post>
    <label for="word">new word</label>
    <br>
    <input type="text" id="word" name="word">
    <input type="submit">
  </form>
  <br>
  <p> ${words} </p>
  `
  return page
}

function phraseList() {
  const list = api.rPhrases()
  let phraselist = ""
  for (let i = 0; i<list.length; i++) {
    const item = list[i]
    phraselist += `
    <a href="/phrases/phrase/${item.id}"> <button>${item.tag}</button>
    <br>
    <br>
    `
  }
  return phraselist
}


router.get("/", (req,res) => {
  res.send(phrasesPage())
})


router.post("/", (req,res) => {
  const tag = req.body.tag
  const id = api.cPhrase(tag).lastInsertRowid
  res.redirect("/phrases/phrase/" + id)
})


router.get("/phrase/:id", (req,res) => {
  const id = req.params.id
  res.send(phrasePage(id))
})

router.post("/phrase/:id", (req,res) => {
  const word = req.body.word
  const id = req.params.id
  const wordid = api.cWord(word).lastInsertRowid
  api.cPhraseW(id,wordid)
  res.redirect("/phrases/phrase/" + id)
})




router.get("/phraselist", (req,res) => {
  const rows = api.rPhrases()
  res.send(phraseList())
})


module.exports = router
