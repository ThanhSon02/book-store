const homeSiteRouter = require("./homeRouter");
const userRouter = require("./authRouter");
const bookRouter = require("./bookRouter");
const authRouter = require("./authRouter");

function route(app) {
    app.use("profile", userRouter);
    app.use("/book", bookRouter);
    app.use("/auth", authRouter);
    app.use("/", homeSiteRouter);
}

module.exports = route;
