require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { connectDB } = require("./config/db.js");

connectDB();

const app = express();

app.use(morgan());
app.use(cors());
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use("/api/products", require("./routes/productsRoutes.js"));
app.use("/api/users", require("./routes/usersRoutes.js"));
app.use("/api", require("./routes/authRoutes.js") )

app.get("/", (req, res) => {
    res.send("Express server!");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})