import pingRouter from "./routes/ping";
import diagnosesRouter from "./routes/diagnoses";
import patientsRouter from "./routes/patiens";
import express from "express";
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/ping", pingRouter);
app.use("/api/diagnoses", diagnosesRouter);
app.use("/api/patients", patientsRouter);
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
