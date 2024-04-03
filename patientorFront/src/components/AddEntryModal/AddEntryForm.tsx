import React, { ChangeEvent, useState } from "react"
import {
  BasicFormData,
  Diagnosis,
  Discharge,
  EntryWithoutId,
  HealthCheckRating,
  Patient,
} from "../../types"
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material"
import patietServices from "../../services/patients"
import HospitalEntryForm from "./HospitalEntryForm"
import HealthcheckEntryForm from "./HealthCheckEntryForm"
import OccupationalHealthcareEntryForm from "./OccupationalHealthcareEntryForm"
import { isAxiosError } from "axios"

interface Props {
  diagnosis: Diagnosis[]
  id: string
  patients: Patient[]
  setPatients: React.Dispatch<React.SetStateAction<Patient[]>>
  setMessage: React.Dispatch<React.SetStateAction<string | null>>
}
const AddEntryForm = (props: Props) => {
  const [type, settype] = useState<
    "HealthCheck" | "OccupationalHealthcare" | "Hospital"
  >("HealthCheck")
  const [diagnosisCodes, setDiagnosisCodes] = useState<
    Array<Diagnosis["code"]>
  >([])
  const [date, setDate] = useState<string>("")
  const [dateError, setDateError] = useState(false)
  const [description, setDescription] = useState("")
  const [specialist, setSpecialist] = useState("")
  const [discharge, setDischarge] = useState<Discharge>({} as Discharge)
  const [employerName, setemployerName] = useState("second")
  const [criteria, setCriteria] = useState("")
  const [dischargeDate, setDischargeDate] = useState("")
  const [healthCheckRating, setHealthCheckRating] =
    useState<HealthCheckRating>(0)

  const handleTypeChange = (e: SelectChangeEvent<string>): void => {
    settype(
      e.target.value as "HealthCheck" | "OccupationalHealthcare" | "Hospital"
    )
  }

  const handleDescriptionChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setDescription(e.target.value)
  }
  const handleSpecialistChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setSpecialist(e.target.value)
  }
  const handleDiagnChange = (e: SelectChangeEvent<string[]>): void => {
    setDiagnosisCodes(diagnosisCodes.concat(e.target.value))
  }
  const assertNever = (type: never): never => {
    throw new Error(`non handled case:${JSON.stringify(type)}`)
  }
  const createNewEntry = (basicformData: BasicFormData): EntryWithoutId => {
    switch (basicformData.type) {
      case "Hospital":
        const newHospitalEntry: EntryWithoutId = {
          ...basicformData,
          type: "Hospital",
          discharge,
        }
        return newHospitalEntry

      case "HealthCheck":
        const newHealthEntry: EntryWithoutId = {
          ...basicformData,
          type: "HealthCheck",
          healthCheckRating,
        }
        return newHealthEntry

      case "OccupationalHealthcare":
        const newOccupationalHealthcareEntry: EntryWithoutId = {
          ...basicformData,
          type: "OccupationalHealthcare",
          employerName,
        }
        return newOccupationalHealthcareEntry

      default:
        return assertNever(basicformData.type)
    }
  }
  const onSubmit = async (e: React.SyntheticEvent) => {
    console.log("on submit")
    e.preventDefault()
    setDischarge({ date: dischargeDate, criteria })
    if (!date) {
    }

    const basicformData: BasicFormData = {
      type,
      date,
      description,
      diagnosisCodes,
      specialist,
    }

    const formValue = createNewEntry(basicformData)
    try {
      const updatedPatient: Patient = await patietServices.addEntryTo(
        props.id,
        formValue
      )
      const updatedPatientsList: Patient[] = props.patients.map((p) => {
        if (p.id == props.id) {
          return updatedPatient
        }
        return p
      })
      props.setPatients(updatedPatientsList)
    } catch (error) {
      if (isAxiosError(error)) {
        console.log("axios erro")
        props.setMessage(error.message)
        setTimeout(() => {
          props.setMessage(null)
        }, 3000)
      }
      console.log("errore sconosciuto", error)
    }
  }
  return (
    <Box sx={{ width: "100%" }} component="form" onSubmit={onSubmit}>
      <input
        style={{ marginBottom: 10 }}
        type="date"
        onChange={(e) => {
          setDate(e.target.value)
        }}
      ></input>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Entry type:</InputLabel>
        <Select
          value={type}
          label="Entry Type"
          onChange={handleTypeChange}
          required
        >
          <MenuItem key={1} value="HealthCheck">
            HealthCheck
          </MenuItem>
          <MenuItem key={2} value="Hospital">
            Hospital
          </MenuItem>
          <MenuItem key={3} value="OccupationalHealthcare">
            OccupationalHealthcare
          </MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Diagnosis</InputLabel>
        <Select
          value={diagnosisCodes}
          label="diagnosis"
          multiple
          onChange={handleDiagnChange}
          required
        >
          {props.diagnosis.map((diagn) => (
            <MenuItem key={diagn.code} value={diagn.code}>
              {diagn.code},{diagn.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <TextField
          required
          sx={{ marginBottom: 2 }}
          multiline
          rows={4}
          placeholder="Write Description Here"
          onChange={handleDescriptionChange}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          required
          sx={{ marginBottom: 2 }}
          placeholder="Write Specialist here"
          onChange={handleSpecialistChange}
        />
      </FormControl>
      <OccupationalHealthcareEntryForm
        type={type}
        setEmployerName={setemployerName}
      ></OccupationalHealthcareEntryForm>
      <HealthcheckEntryForm
        type={type}
        healthCheckRating={healthCheckRating}
        setHealthCheckRating={setHealthCheckRating}
      ></HealthcheckEntryForm>
      <HospitalEntryForm
        type={type}
        setCriteria={setCriteria}
        setDischargeDate={setDischargeDate}
      ></HospitalEntryForm>
      <Button type="submit">Submit</Button>
    </Box>
  )
}

export default AddEntryForm
