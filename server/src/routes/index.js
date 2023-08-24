const homeSiteRouter = require("./homeRouter");
const authRouter = require("./authRouter");
const bookRouter = require("./bookRouter");

function route(app) {
    app.use("/book", bookRouter);
    app.use("/auth", authRouter);
    app.use("/", homeSiteRouter);
}

module.exports = route;
