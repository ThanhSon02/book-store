const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModal");

class userController {
    // regiter (post)
    register = async (req, res, next) => {
        try {
            const { name, email, password, phone } = req.body;
            const userEmail = await User.findOne({ email });
            if (userEmail) {
                return res
                    .status(403)
                    .json({
                        status: 403,
                        message: "The email is exis!",
                        isSuccess: false,
                    });
            }
            const password_hash = bcrypt.hashSync(password, 10);
            const createdUser = await User.create({
                name,
                email,
                password: password_hash,
                phone,
            });
            if (createdUser) {
                return res
                    .status(200)
                    .json({
                        status: 200,
                        message: "Register successfull!",
                        isSuccess: true,
                    });
            }
        } catch (error) {
            return res
                .status(404)
                .json({
                    status: 404,
                    message: "Register failure!",
                    isSuccess: false,
                });
        }
    };

    // login (post)
    login = async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(403).json({
                    status: 403,
                    message: "User doesn't exist!",
                });
            }
            const validPassword = bcrypt.compareSync(password, user.password);
            if (user && validPassword) {
                const accesToken = this.generateAccessToken(user);
                return res.status(200).json({
                    status: 200,
                    message: "Login successfull!",
                    accessToken: accesToken,
                    data: {
                        id: user._id,
                        username: user.name,
                        email: user.email,
                        phone: user.phone,
                        isAdmin: user.isAdmin,
                        address: user.address,
                        avatar: user.avatar,
                        city: user.city,
                    },
                });
            }
        } catch (error) {
            return res.status(404).json("Failure");
        }
    };

    generateAccessToken = (user) => {
        return jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_ACCESS_KEY,
            { expiresIn: "2h" }
        );
    };
}

module.exports = new userController();
