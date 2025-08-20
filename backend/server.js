
const express = require("express");
const notesRouter = require("./src/routes/notesRouter.js");
const { connectDB } = require("./src/config/db.js");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
}))


app.use("/api/notes", notesRouter)


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port", PORT);
    });
})


