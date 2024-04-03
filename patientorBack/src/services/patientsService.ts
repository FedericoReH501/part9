import patientsData from "../data/patients";
import { Entry, EntryWithoutId } from "../types/Entry";
import { Patients, frontendPatients, newPatients } from "../types/Patients";
import { v1 as uuid } from "uuid";

const getPatients = (): Patients[] => {
  return patientsData as Patients[];
};

const getFrontendPatients = (): frontendPatients[] => {
  return patientsData.map(
    ({ id, name, dateOfBirth, gender, occupation, entries }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
      entries,
    }),
  ) as frontendPatients[];
};

const addPatient = (newPatients: newPatients): Patients => {
  const id: string = uuid();
  const addedPatient = { id, ...newPatients };
  patientsData.push(addedPatient);
  return addedPatient;
};

const findById = (id: string): Patients => {
  const patient = patientsData.find((p) => p.id === id);
  if (patient) {
    return patient as Patients;
  }
  throw new Error("invalid id");
};

const addEntry = (patientId: string, newEntry: EntryWithoutId) => {
  console.log("patient services: adding entry");
  const id: string = uuid();
  const entryToAdd: Entry = { ...newEntry, id };

  const index: number = patientsData.findIndex((p) => p.id === patientId);

  const patientToUpadate = patientsData[index];

  patientToUpadate.entries.push(entryToAdd);

  patientsData[index] = patientToUpadate;

  return patientToUpadate;
};

export default {
  getPatients,
  getFrontendPatients,
  addPatient,
  findById,
  addEntry,
};
