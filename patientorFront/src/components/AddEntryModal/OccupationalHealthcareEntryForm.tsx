import { FormControl, TextField } from "@mui/material"

interface Props {
  type: "HealthCheck" | "OccupationalHealthcare" | "Hospital"
  setEmployerName: React.Dispatch<React.SetStateAction<string>>
}

const OccupationalHealthcareEntryForm = (props: Props) => {
  if (props.type === "OccupationalHealthcare") {
    return (
      <>
        <FormControl fullWidth>
          <TextField
            sx={{ marginBottom: 2 }}
            placeholder="Empoyer Name"
            defaultValue={""}
            onChange={(e) => {
              props.setEmployerName(e.target.value)
            }}
          />
        </FormControl>
      </>
    )
  }
}
export default OccupationalHealthcareEntryForm
