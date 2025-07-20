const express = require("express")
const router = express.Router()

const { auth } = require("../middlewares/auth");
const {login,signUp}=require('../controller/auth');



router.post("/login", login);
router.post("/signup", signUp);

module.exports = router

