const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authMiddleware = require("../middleware/auth")
router.post("/users", userController.createUser  )
router.post("/login", userController.loginUser)
//The userId is sent by front end
router.get("/user/:userId",authMiddleware.auth, userController.getUserData)
router.put("/user/:userId",authMiddleware.auth, userController.updateUser)
router.put("/deleteduser/:userId",authMiddleware.auth, userController.deleteUser)

module.exports = router;