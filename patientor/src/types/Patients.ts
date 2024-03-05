export enum Gender {
  Male = "male",
  Female = "female",
}

export interface Patients {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export type newPatients = Omit<Patients, "id">;

export type frontendPatients = Omit<Patients, "ssn">;
