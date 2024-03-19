import patientsData from "../data/patients";
import { Patients, frontendPatients, newPatients } from "../types/Patients";
import { v1 as uuid } from "uuid";

const getPatients = (): Patients[] => {
  return patientsData as Patients[];
};

const getFrontendPatients = (): frontendPatients[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  })) as frontendPatients[];
};

const addPatient = (newPatients: newPatients): Patients => {
  const id: string = uuid();
  const addedPatient = { id, ...newPatients };
  patientsData.push(addedPatient);
  return addedPatient;
};

export default { getPatients, getFrontendPatients, addPatient };
