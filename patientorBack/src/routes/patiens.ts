import express from "express";
import patientsService from "../services/patientsService";
import { frontendPatients, newPatients, Patients } from "../types/Patients";
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
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    }

    console.log(error);
  }
});

router.get("/:id", (req, res) => {
  try {
    const patient = patientsService.findById(req.params.id);
    res.json(patient);
    console.log(patient as Patients);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    }
  }
});
export default router;
