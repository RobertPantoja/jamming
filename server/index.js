const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3010;

app.use(cors({ origin: "http://127.0.0.1:3000" }));

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
