import pingRouter from "../routes/ping";
import express from "express";
const cors = require("cors");

const app = express();

app.use(cors());

app.use("/api/ping", pingRouter);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
