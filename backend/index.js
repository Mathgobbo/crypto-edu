const { connectDatabase } = require("./src/services/mongodb");
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const router = require("./src/routes");

app.use(cors());
app.use(router);

app.use(express.static(path.join(__dirname, "/static")));

async function main() {
  try {
    await connectDatabase();
    app.listen(8080, () => console.log("Listening on 8080"));
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
}

main();
