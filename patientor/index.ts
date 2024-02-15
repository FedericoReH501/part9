import express from "express";

const app = express();
app.get("/api/ping", (_req, resp) => {
  resp.send("pong");
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
