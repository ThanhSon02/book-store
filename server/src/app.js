const express = require("express");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const route = require("./routes");
const port = process.env.PORT || 3001;
const db = require("./db/database");

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));
app.use(cookieParser());
app.use(cors({ credentials: true }));

// Connect to db
db.connectDB();

route(app);

app.listen(port, () => {
    console.log("App listen on port", port);
});
