const cloudinary = require("cloudinary");
class bookController {
    async postFile(req, res, next) {
        const result = req.file;
        console.log(result);
        return res.status(200).json(result);
    }
}

module.exports = new bookController();
