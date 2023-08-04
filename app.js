if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
// const router = require("./routes/index");
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
