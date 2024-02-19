import express from "express";
import patientsService from "../services/patientsService";
import { frontendPatients } from "../types/Patients";
const router = express.Router();

router.get("/", (_req, res) => {
  const data: frontendPatients[] = patientsService.getFrontendPatients();
  res.json(data);
});
export default router;
