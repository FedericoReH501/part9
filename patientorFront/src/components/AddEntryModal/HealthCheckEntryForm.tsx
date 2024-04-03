import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { HealthCheckRating } from "../../types"

interface Props {
  type: "HealthCheck" | "OccupationalHealthcare" | "Hospital"
  healthCheckRating: HealthCheckRating
  setHealthCheckRating: React.Dispatch<React.SetStateAction<HealthCheckRating>>
}
const HealthcheckEntryForm = (props: Props) => {
  if (props.type === "HealthCheck") {
    return (
      <>
        <FormControl fullWidth>
          <InputLabel>HealthCheck</InputLabel>
          <Select
            label="health check"
            value={props.healthCheckRating}
            onChange={(e) => {
              props.setHealthCheckRating(e.target.value as HealthCheckRating)
            }}
            required
          >
            <MenuItem value={HealthCheckRating.Healthy}> Healthy</MenuItem>
            <MenuItem value={HealthCheckRating.LowRisk}> LowRisk</MenuItem>
            <MenuItem value={HealthCheckRating.HighRisk}> HighRisk</MenuItem>
            <MenuItem value={HealthCheckRating.CriticalRisk}>
              CriticalRisk
            </MenuItem>
          </Select>
        </FormControl>
      </>
    )
  }
}

export default HealthcheckEntryForm
