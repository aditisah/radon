const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")
//const AuthorController = require("../controllers/authorController");

router.get("/getBooksByAuthorId/:author_id", BookController.getBooksByAuthorId)
router.get("/getListOfAuthors", BookController.getListOfAuthors)


module.exports = router;