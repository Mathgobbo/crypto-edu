const express = require("express");
const app = express();
const cors = require("cors");

const router = require("./src/routes");
const { connectDatabase } = require("./src/services/mongodb");
app.use(cors());
app.use(router);

app.use(express.static("static"));

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
