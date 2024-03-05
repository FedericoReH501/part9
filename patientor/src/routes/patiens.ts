import express from "express";
import patientsService from "../services/patientsService";
import { frontendPatients, newPatients } from "../types/Patients";
import { toNewPatients } from "../utils/validation";
const router = express.Router();

router.get("/", (_req, res) => {
  const data: frontendPatients[] = patientsService.getFrontendPatients();
  res.json(data);
});

router.post("/", (req, res) => {
  console.log("posting");
  try {
    const newPatients: newPatients = toNewPatients(req.body);
    const addedPatient = patientsService.addPatient(newPatients);
    res.json(addedPatient);
    console.log(addedPatient, "patients succesfully added");
  } catch (error) {
    console.log(error);
  }
});
export default router;
