const express = require("express");
const app = express();
const cors = require("cors");

const router = require("./src/routes");
app.use(cors());
app.use(router);

app.use(express.static("static"));

app.listen(8080, () => console.log("Listening on 8080"));
