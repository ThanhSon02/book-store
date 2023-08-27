const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        book_name: { type: String, require: true },
        author: { type: String, require: true },
        rating: { type: Number, require: true },
        book_img: { type: String },
        catagory: { type: String, require: true },
        in_stock: { type: Number, require: true },
        description: { type: String },
        discount: { type: Number },
    },
    {
        timestamps: true,
    }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
