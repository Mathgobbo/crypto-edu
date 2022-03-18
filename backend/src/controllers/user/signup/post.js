const { UserModel } = require("../../../schemas/User");

module.exports.post = async (req, res) => {
  //RECEBER INFORMAÇÕES DO REQUEST.BODY
  const data = req.body;
  
  //INSERIR GURI NO BANCO
  const user = await UserModel.create({
    nickname: data.usuario,
    email: data.email,
    password: data.senha,
  });
  // RETORNA USUÁRIO
  res.send(user);
};
