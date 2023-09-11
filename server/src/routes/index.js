const userRouter = require("./userRouter");
const bookRouter = require("./bookRouter");
const authRouter = require("./authRouter");
const orderRouter = require("./orderRouter");

function route(app) {
    app.use("/api/v1/order", orderRouter);
    app.use("/api/v1/user", userRouter);
    app.use("/api/v1/book", bookRouter);
    app.use("/api/v1/auth", authRouter);
}

module.exports = route;
