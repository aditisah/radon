const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth = require("../middleware/auth")

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/user/:userId", auth.authenticate,auth.authorise, userController.getUserData)
router.put("/user/:userId", auth.authenticate, auth.authorise, userController.updateUser)
router.delete('/deleteuser/:userId', auth.authenticate, auth.authorise, userController.deleteUser)

module.exports = router;