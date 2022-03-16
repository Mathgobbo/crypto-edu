module.exports.post = (request, response) => {
  //RECEBER INFORMAÇÕES DO REQUEST.BODY
  //INSERIR GURI NO BANCO
  // RETORNA USUÁRIO
  response.send({ id: Math.random() * 1000, nome: "Matheus" });
};
