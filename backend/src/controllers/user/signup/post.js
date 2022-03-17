module.exports.post = (req, res) => {
  //RECEBER INFORMAÇÕES DO REQUEST.BODY
  //INSERIR GURI NO BANCO
  // RETORNA USUÁRIO
  res.send({ id: Math.random() * 1000, nome: "Matheus" });
};
