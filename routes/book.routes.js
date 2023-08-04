const express = require("express");
const BookController = require("../controllers/book.controller");
const router = express.Router();

router.get("/getWishlistBook", BookController.getWishlistBook);
router.post("/addWishlistBook", BookController.addWishlistBook);
router.delete("/deleteWishlistBook", BookController.deleteWishlistBook);
module.exports = router;
