const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController");
const BookController = require("../controllers/bookController");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  );
router.get("/getUsersData", UserController.getUsersData);

router.post("/createNewBook", BookController.createNewBook);
router.get("/getAllBooks", BookController.getAllBooks);
module.exports = router;