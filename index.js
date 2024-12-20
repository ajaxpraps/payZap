const express = require("express");
const rootRouter = require("./routes/index");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(process.env.PORT);
