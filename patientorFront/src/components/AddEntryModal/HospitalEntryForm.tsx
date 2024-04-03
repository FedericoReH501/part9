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

interface Props {
  type: "HealthCheck" | "OccupationalHealthcare" | "Hospital"

  setDischargeDate: React.Dispatch<React.SetStateAction<string>>
  setCriteria: React.Dispatch<React.SetStateAction<string>>
}
const HospitalEntryForm = (props: Props) => {
  if (props.type === "Hospital") {
    return (
      <>
        <FormControl fullWidth>
          <input
            style={{ marginBottom: 10 }}
            type="date"
            onChange={(e) => {
              props.setDischargeDate(e.target.value)
            }}
          ></input>
          <TextField
            sx={{ marginBottom: 2 }}
            placeholder="Criteria"
            defaultValue={""}
            onChange={(e) => {
              props.setCriteria(e.target.value)
            }}
          />
        </FormControl>
      </>
    )
  }
}

export default HospitalEntryForm
