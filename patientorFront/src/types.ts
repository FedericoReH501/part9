export interface Diagnosis {
  code: string
  name: string
  latin?: string
}
export interface BaseEntry {
  id: string
  description: string
  date: string
  specialist: string
  diagnosisCodes?: Array<Diagnosis["code"]>
}

export enum Types {
  healthCheck = "HealthCheck",
  occupationalHealthcare = "OccupationalHealthcare",
  hospital = "Hospital",
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3,
}

interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck"
  healthCheckRating: HealthCheckRating
}

export interface SickLeave {
  startDate: string
  endDate: string
}
interface OccupationalHealthcareEntry extends BaseEntry {
  type: "OccupationalHealthcare"
  sickLeave?: SickLeave
  employerName: string
}
export interface Discharge {
  date: string
  criteria: string
}

interface HospitalEntry extends BaseEntry {
  type: "Hospital"
  discharge: Discharge
}

export type Entry =
  | HealthCheckEntry
  | OccupationalHealthcareEntry
  | HospitalEntry

export type EntryWithoutId =
  | Omit<HospitalEntry, "id">
  | Omit<HealthCheckEntry, "id">
  | Omit<OccupationalHealthcareEntry, "id">

export interface BasicFormData {
  type: "HealthCheck" | "OccupationalHealthcare" | "Hospital"

  description: string
  date: string
  specialist: string
  diagnosisCodes?: Array<Diagnosis["code"]>
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface Patient {
  id: string
  name: string
  occupation: string
  gender: Gender
  ssn?: string
  dateOfBirth?: string
  entries: Entry[]
}

export type PatientFormValues = Omit<Patient, "id" | "entries">
