const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path')

const router = require("./src/routes");
app.use(cors());
app.use(router);

app.use(express.static(path.join(__dirname,"/static")));

app.listen(3000, () => console.log("Listening on 3000"));