if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const routers = require("./routes/index.routes");
const errorHandler = require("./middleware/errorHandler");
const port = process.env.PORT || 3001;
require("./config/db");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routers);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
