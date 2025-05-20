const express = require("express");

const PORT = 4000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
