const express = require("express");
const router = express.Router();
const Article = require("./controllers/article");
const User = require("./controllers/user");
const path = require("path");
const { UserModel } = require("./schemas/User");
const { json } = require("express");

///Rotas
router.post("/api/artigo", Article.post);
router.get("/api/artigo", Article.get);

router.post("/api/user/signup", User.signUp.post);

router.post("/api/user/signin", async (req, res) => {
  const data = req.body

  const query = UserModel.find({email: data.email})
  const user = await query.exec()

  if (user.length === 0) {

    res.send({mensagem: 'Usuário não encontrado.'})
    return

  }

  if (data.senha === user[0].password) {

    res.send(user[0])
    return

  }

  res.send({mensagem: 'Senha inválida.'})

});

router.get("/artigo", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/Criação de artigos.html"));
});

module.exports = router;
