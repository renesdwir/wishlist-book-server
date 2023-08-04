const express = require("express");
const router = express.Router();
const BookRouter = require("./book.routes");

router.get("/", (req, res) => {
  res.send("Welcome To My API");
});
router.use("/book", BookRouter);
module.exports = router;
