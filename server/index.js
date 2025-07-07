require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors({ origin: "http://127.0.0.1:3000" }));
app.use(express.json());
app.use(authRoutes)

const port = process.env.PORT || 3010;
app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
