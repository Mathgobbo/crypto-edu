const mongoose = require("mongoose");

async function connectDatabase() {
  await mongoose.connect(
    `mongodb+srv://cryptoeduadmin:j3SEAzQEGHGV1kMr@cluster0.xuob5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  );
}
module.exports = { connectDatabase: connectDatabase };
