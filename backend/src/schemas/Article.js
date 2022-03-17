const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  title: mongoose.Schema.Types.String,
  description: mongoose.Schema.Types.String,
  created_at: mongoose.Schema.Types.Date,
});

const ArticleModel = mongoose.model("Article", articleSchema);

module.exports = { articleSchema, ArticleModel };
