import { Discharge, EntryWithoutId, HealthCheckRating } from "../types/Entry";
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
const parseTextFields = (data: unknown): string => {
  if (!data || !isString(data)) {
    throw new Error("text is missing!!");
  }

  if (data.length === 0) {
    throw new Error("text is to short!!");
  }
  return data;
};
const isDischarge = (data: unknown): data is Discharge => {
  console.log("type of data discharge", typeof data);
  return true;
};
const parseDischarge = (data: unknown): Discharge => {
  if (!data || !isDischarge(data)) {
    throw new Error("missing or malformatted discharge");
  }
  return data;
};
export const toNewPatients = (object: unknown): newPatients => {
  console.log("validating new entry");
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
      entries: [],
    };
    return newPatients;
  }
  throw new Error("some field are missing");
};

export const toNewEntry = (object: unknown) => {
  if (!object || typeof object !== "object") {
    throw new Error("incorrect or missing data");
  }
  if (
    "type" in object &&
    "date" in object &&
    "description" in object &&
    "specialist" in object
  ) {
    const newBaseEntry = {
      date: dateParse(object.date),
      description: parseTextFields(object.description),
      specialist: parseTextFields(object.specialist),
    };
    if (object.type === "Hospital" && "discharge" in object) {
      const newEntry: EntryWithoutId = {
        type: object.type,
        ...newBaseEntry,
        discharge: parseDischarge(object.discharge),
      };

      return newEntry;
    }
    if (object.type === "HealthCheck" && "healthCheckRating" in object) {
      const newEntry: EntryWithoutId = {
        type: object.type,
        ...newBaseEntry,
        healthCheckRating: object.healthCheckRating as HealthCheckRating,
      };

      return newEntry;
    }
    if (object.type === "OccupationalHealthcare" && "employerName" in object) {
      const newEntry: EntryWithoutId = {
        type: object.type,
        ...newBaseEntry,
        employerName: parseTextFields(object.employerName),
      };

      return newEntry;
    }
  }
  throw new Error("some field are missing");
};
