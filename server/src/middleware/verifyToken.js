const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.body.accessToken;
    console.log(req.headers);
    if (token) {
        jwt.verify(token, process.env.JWT_ACCESS_KEY, (error, user) => {
            if (error) {
                res.status(403).json({
                    status: 403,
                    message: "Token isn't valid!",
                });
            }
            req.body = user;
            next();
        });
    } else {
        res.status(401).json({
            status: 401,
            message: "You're not authenticated!",
        });
    }
};

module.exports = verifyToken;
