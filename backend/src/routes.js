const express = require("express");
const router = express.Router();
const Article = require("./controllers/article");
const User = require("./controllers/user");
const path = require("path");

///Rotas
router.post("/api/artigo", Article.post);
router.get("/api/artigo", Article.get);

router.post("/api/user/signup", User.signUp.post);
router.post("/api/user/signin", () => {});

router.get("/artigo", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/Criação de artigos.html"));
});

module.exports = router;
