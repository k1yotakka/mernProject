const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const { readFileAsync } = require("./utils/fileReader");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("MERN Backend is running!");
});

app.get("/api/read-file", async (req, res, next) => {
    try {
        const data = await readFileAsync("test.txt");
        res.json({ content: data });
    } catch (error) {
        next(error);
    }
});

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
