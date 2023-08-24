const express = require("express");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary");
const route = require("./routes");
const cors = require("cors");
const port = process.env.PORT || 3001;
const db = require("./db/database");

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Connect to db
db.connectDB();

route(app);

app.listen(port, () => {
    console.log("App listen on port", port);
});
