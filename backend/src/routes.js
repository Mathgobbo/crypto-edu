const express = require("express");
const router = express.Router();
const Article = require("./controllers/article");
const User = require("./controllers/user");
const path = require('path')

///Rotas
router.post("/artigo", Article.post);

router.get("/artigo", (req, res) => {
    res.sendFile(path.join(__dirname,'../static/Criação de artigos.html'))
});

router.post("/user/signup", User.signUp.post);
router.post("/user/signin", () => {});

module.exports = router;
