import React, { ChangeEvent, useState } from "react"
import {
  Diagnosis,
  Discharge,
  Entry,
  EntryWithoutId,
  Patient,
  Types,
} from "../../types"
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material"
import patientService from "../../services/patients"

interface Props {
  diagnosis: Diagnosis[]
  id: string
  patients: Patient[]
  setPatients: React.Dispatch<React.SetStateAction<Patient[]>>
}
const AddEntryForm = (props: Props) => {
  const [type, settype] = useState("")
  const [diagnosisCodes, setDiagnosisCodes] = useState<Diagnosis["code"][]>([])
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [specialist, setSpecialist] = useState("")
  const [discharge, setDischarge] = useState<Discharge>({} as Discharge)
  const [employerName, setemployerName] = useState("second")
  const [healthCheckRating, setHealthCheckRating] = useState(0)

  const handleTypeChange = (e: SelectChangeEvent<string>): void => {
    settype(e.target.value)
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

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const newBaseEntry = {
      date,
      description,
      specialist,
      diagnosisCodes,
    }

    switch (type) {
      case "Hospital":
        const newHospitalEntry: EntryWithoutId = {
          type,
          ...newBaseEntry,
          discharge,
        }
        await patientService.addEntry(props.id, newHospitalEntry)
        break
      case "OccupationalHealthcare":
        const NewOccupationalEntry: EntryWithoutId = {
          type,
          ...newBaseEntry,
          employerName,
        }
        const response = await patientService.addEntry(
          props.id,
          NewOccupationalEntry
        )
        console.log("props patients:", props.patients)
        props.setPatients(
          props.patients.map((p) => {
            console.log("test:", p)
            if (p.id === props.id) {
              const updatedPatient = p
              updatedPatient.entries.push(response)
              return updatedPatient
            }
            return p
          })
        )
        break

      case "HealthCheck":
        const NewHealthcheckEntry: EntryWithoutId = {
          type,
          ...newBaseEntry,
          healthCheckRating,
        }
        await patientService.addEntry(props.id, NewHealthcheckEntry)
        break

      default:
        break
    }
  }
  return (
    <Container sx={{ width: "100%" }}>
      <input
        style={{ marginBottom: 10 }}
        type="date"
        onChange={(e) => {
          setDate(e.target.value)
        }}
      ></input>

      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Entry type:</InputLabel>
        <Select value={type} label="Entry Type" onChange={handleTypeChange}>
          {Object.values(Types).map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Diagnosis</InputLabel>
        <Select
          value={diagnosisCodes}
          label="diagnosis"
          multiple
          onChange={handleDiagnChange}
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
          sx={{ marginBottom: 2 }}
          multiline
          rows={4}
          placeholder="Write Description Here"
          defaultValue={""}
          onChange={handleDescriptionChange}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          sx={{ marginBottom: 2 }}
          placeholder="Write Specialist here"
          defaultValue={""}
          onChange={handleSpecialistChange}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          sx={{ marginBottom: 2 }}
          placeholder="Empoyer Name"
          defaultValue={""}
          onChange={(e) => {
            setemployerName(e.target.value)
          }}
        />
      </FormControl>
      <Button onClick={onSubmit}>Submit</Button>
    </Container>
  )
}

export default AddEntryForm
