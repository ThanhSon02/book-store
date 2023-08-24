const User = require("../models/userModal");

class homeSiteController {
    async index(req, res, next) {
        const { userId } = req.body;
        const userData = await User.findOne({ userId });
        const { password, ...other } = userData._doc;
        return res.status(200).json({
            status: 200,
            message: "Done!",
            userData: { ...other },
        });
    }
    async insertBook(req, res, next) {
        const result = await db.db.none(addBook, [
            3,
            "Cha giàu cha nghèo",
            "ncoiancowoic",
            15,
            4,
        ]);
        return res.json(result);
    }
}

module.exports = new homeSiteController();
