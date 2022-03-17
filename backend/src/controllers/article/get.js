const { ArticleModel } = require("../../schemas/Article");

module.exports.get = async (request, response) => {
  try {
    const articlesQuery = ArticleModel.find();
    const articles = await articlesQuery.exec();
    response.send({ data: articles });
  } catch (error) {
    console.log(error);
    response.status(500).send({ error: error });
  }
};
