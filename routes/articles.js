const express = require('express')
const router = express.Router()
const Articles = require('../models/articles')
//Request get all articles
router.get('/', (req, res) => {
  Articles.find()
    .then(item => res.json(item))
    .catch(err => res.status(400).json(`Error: ${err}`))
})
//Request add new article
router.post('/add', (req, res) => {
  const newArticle = new Articles({
    title: req.body.title,
    article: req.body.article,
    authorname: req.body.authorname,
    time: req.body.time
  })
  newArticle
    .save()
    .then(() => res.json("New Article has been added!"))
    .catch(err => res.status(400).json(`Error: ${err}`))
})
//Find article by id
router.get("/:id", (req, res) => {
  Articles.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(400).json(`Error: ${err}`))
})
//Find article by id and update
router.put("/update/:id", (req, res) => {
  Articles.findById(req.params.id)
    .then(item => {
      item.title = req.body.title,
      item.article = req.body.article,
      item.authorname = req.body.authorname

      item.save()
        .then(() => res.json("Article has been updated successfully!"))
        .catch(err => res.status(400).json(`Error: ${err}`))
    })

})
//Delete article
router.delete("/:id", (req, res) => {
  Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json("Article has been deleted!"))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router