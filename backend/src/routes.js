const express = require("express");
const router = express.Router();
const Article = require("./controllers/article");
const User = require("./controllers/user");

///Rotas
router.post("/artigo", Article.post);
router.get("/artigo", () => {});
router.post("/user/signup", User.signUp.post);
router.post("/user/signin", () => {});

module.exports = router;
