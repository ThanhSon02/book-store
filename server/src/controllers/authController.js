const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModal");

class authController {
    // regiter (post)
    register = async (req, res) => {
        try {
            const { name, email, password, phone } = req.body;
            const userEmail = await User.findOne({ email });
            if (userEmail) {
                return res.status(403).json({
                    message: "The email is exis!",
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
                res.status(200).json({
                    message: "Register successfull!",
                });
            }
        } catch (error) {
            res.status(404).json({
                message: "Register failure!",
            });
        }
    };

    // login (post)
    login = async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({
                    message: "User doesn't exist!",
                    // userInfo: null,
                });
            }
            const validPassword = bcrypt.compareSync(password, user.password);

            if (user && validPassword) {
                const accessToken = this.generateAccessToken(user);
                const { password, ...others } = user._doc;
                res.status(200).json({
                    message: "Login successfull!",
                    userInfo: { ...others },
                    accessToken,
                });
            }
        } catch (error) {
            res.status(401).json({ message: "Login failure" });
        }
    };

    generateAccessToken = (user) => {
        return jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_ACCESS_KEY,
            {
                expiresIn: "2d",
            }
        );
    };

    // Logout
    logout = async (req, res) => {
        res.clearCookie("refreshToken");
        res.status(200).json({
            message: "Logout successfull!",
        });
    };
}

module.exports = new authController();
