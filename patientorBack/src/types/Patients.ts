export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}
export interface Entry {}
export interface Patients {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
  entries: Entry[];
}

export type newPatients = Omit<Patients, "id">;

export type frontendPatients = Omit<Patients, "ssn" | "entries">;
