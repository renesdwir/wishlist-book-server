const Book = require("../model/book.model");

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
      const { bookId, title, thumbnail, authors, averageRating } = req.body;
      const existingBook = await Book.findOne({ bookId });
      if (existingBook) throw { name: "Book already exists" };

      let book = new Book({
        bookId,
        title,
        thumbnail,
        authors,
        averageRating,
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
      const { bookId } = req.body;
      const deletedBook = await Book.findOneAndDelete({ bookId });
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
