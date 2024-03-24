import { Gender, newPatients } from "../types/Patients";

const isString = (data: unknown): data is string => {
  return typeof data === "string" || data instanceof String;
};

const isDate = (data: string): boolean => {
  return Boolean(Date.parse(data));
};

const dateParse = (data: unknown): string => {
  if (!data || !isString(data) || !isDate(data)) {
    throw new Error(" Error, insert a valid date!");
  }

  return data;
};

const nameParse = (data: unknown): string => {
  if (!data || !isString(data)) {
    throw new Error("Error, insert a valid name");
  }
  return data;
};
const occupationParse = (data: unknown): string => {
  if (!data || !isString(data)) {
    throw new Error("insert valid occupation");
  }
  return data;
};
const isGender = (data: string): data is Gender => {
  return Object.values(Gender)
    .map((d) => d.toString())
    .includes(data);
};
const genderParse = (data: unknown): Gender => {
  if (!data || !isString(data) || !isGender(data)) {
    throw new Error("incorrect data");
  }
  return data;
};

const parseSsn = (data: unknown): string => {
  if (!isString(data)) {
    throw new Error("incorrect ssn");
  }
  return data;
};

export const toNewPatients = (object: unknown): newPatients => {
  if (!object || typeof object !== "object") {
    throw new Error("incorrect or missing data");
  }
  if (
    "name" in object &&
    "ssn" in object &&
    "dateOfBirth" in object &&
    "gender" in object &&
    "occupation" in object
  ) {
    const newPatients: newPatients = {
      name: nameParse(object.name),
      dateOfBirth: dateParse(object.dateOfBirth),
      occupation: occupationParse(object.occupation),
      gender: genderParse(object.gender),
      ssn: parseSsn(object.ssn),
    };
    return newPatients;
  }
  throw new Error("some field are missing");
};
