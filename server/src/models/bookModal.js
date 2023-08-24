const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    // book_name: { type: String, require: true },
    // author: { type: String, require: true },
    // rating: { type: Number, require: true },
    book_img: { type: String },
});
