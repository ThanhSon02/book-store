const cloudinary = require("cloudinary");
const Book = require("../models/bookModal");
class bookController {
    async addBook(req, res) {
        const { bookName, rating, author, in_stock, catagory, description } =
            req.body;
        const bookImgURL = req.file.path;
        const createdBook = await Book.create({
            book_name: bookName,
            author,
            rating,
            book_img: bookImgURL,
            in_stock,
            catagory,
            description,
        });
        if (createdBook) {
            return res.status(200).json({
                message: "Adding successfull!",
            });
        } else {
            return res.status(401).json({
                message: "Adding failure!",
            });
        }
    }
}

module.exports = new bookController();
