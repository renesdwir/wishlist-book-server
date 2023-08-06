const Book = require("../model/book.model");
const BookList = require("../model/bookList.model");

class BookController {
  static getWishlistBook = async (req, res, next) => {
    try {
      let wishlistBook = await Book.find();
      res.status(200).json({ message: "get data success", data: wishlistBook });
    } catch (error) {
      next(error);
    }
  };

  static addWishlistBook = async (req, res, next) => {
    try {
      const { bookId, title, thumbnail, authors, averageRating, ratingsCount } =
        req.body;
      const existingBook = await Book.findOne({ bookId });
      if (existingBook) throw { name: "The book is already on the wishlist" };

      let book = new Book({
        bookId,
        title,
        thumbnail,
        authors,
        averageRating,
        ratingsCount,
      });
      let newBook = await book.save();
      res
        .status(201)
        .json({ message: "Wishlist book created successfully", data: newBook });
    } catch (error) {
      next(error);
    }
  };

  static deleteWishlistBook = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedBook = await Book.findOneAndDelete({ bookId: id });
      if (!deletedBook) throw { name: "Book does not exists" };
      res.status(200).json({
        message: "Wishlist book deleted successfully",
        data: deletedBook,
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = BookController;
