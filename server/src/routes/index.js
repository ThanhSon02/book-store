const userRouter = require("./userRouter");
const bookRouter = require("./bookRouter");
const authRouter = require("./authRouter");
const orderRouter = require("./orderRouter");

function route(app) {
    app.all("/", function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });
    app.use("/api/v1/order", orderRouter);
    app.use("/api/v1/user", userRouter);
    app.use("/api/v1/book", bookRouter);
    app.use("/api/v1/auth", authRouter);
    app.use("/", (req, res) => {
        res.status(200).send("Hello World!!");
    });
}

module.exports = route;
