import express from "express";
const cors = require("cors");

const app = express();
app.use(cors());
app.get("/api/ping", (_req, resp) => {
  console.log("im here");
  resp.send("pong");
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
