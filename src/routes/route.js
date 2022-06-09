const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController");
const bookController= require("../controllers/bookController");
const publisherController = require("../controllers/publisherController");

router.post("/createAuthor", authorController.createAuthor  )
router.post("/createPublisher",publisherController.createPublisher)
//router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)
router.put("/books",bookController.updateIsHardCover)
//router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;