import patientsData from "../data/patients";
import { Patients, frontendPatients } from "../types/Patients";

const getPatients = (): Patients[] => {
  return patientsData;
};

const getFrontendPatients = (): frontendPatients[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export default { getPatients, getFrontendPatients };
