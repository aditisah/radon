const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")
//const AuthorController = require("../controllers/authorController");

router.get("/getBooksByAuthorId/:author_id", BookController.getBooksByAuthorId)
router.get("/getListOfAuthors", BookController.getListOfAuthors)



// router.post("/createBook", BookController.createBook  )
// router.get("/bookList", BookController.getBooksList)
// router.post("/getBooksInYear", BookController.getBooksInYear)
// router.post("/getParticularBooks", BookController.getParticularBooks)
// router.get("/getXINRBooks", BookController.getXINRBooks)
// router.get("/getRandomBooks", BookController.getRandomBooks)

module.exports = router;