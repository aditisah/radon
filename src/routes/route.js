const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")
const AuthorController = require("../controllers/authorController");

router.post("/createAuthor", AuthorController.createAuthor);
router.post("/createBook", BookController.createBook);
router.get("/getBookByAuthor", BookController.getBookByAuthor)
router.get("/findAuthorByBook", BookController.findAuthorByBook)
router.get("/getAuthorWithBooks", BookController.getAuthorWithBooks)



// router.post("/createBook", BookController.createBook  )
// router.get("/bookList", BookController.getBooksList)
// router.post("/getBooksInYear", BookController.getBooksInYear)
// router.post("/getParticularBooks", BookController.getParticularBooks)
// router.get("/getXINRBooks", BookController.getXINRBooks)
// router.get("/getRandomBooks", BookController.getRandomBooks)

module.exports = router;