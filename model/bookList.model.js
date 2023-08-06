const mongoose = require("mongoose");

let bookListSchema = new mongoose.Schema(
  {
    bookId: {
      type: String,
      required: [true, "Book Id is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    thumbnail: {
      type: String,
      required: [true, "Thumbnail is required"],
    },
    authors: {
      type: String,
      required: [true, "Authors is required"],
    },
    averageRating: {
      type: Number,
      default: 0,
      required: [true, "Rating is required"],
    },
    ratingCount: {
      type: Number,
      default: 0,
      required: [true, "Rating Count is required"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("BookList", bookListSchema);
