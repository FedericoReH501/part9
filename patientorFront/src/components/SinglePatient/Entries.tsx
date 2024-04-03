import { Paper } from "@mui/material"
import { Diagnosis, Entry } from "../../types"
import EntryDetails from "./EntryDetails/EntryDetails"

interface Props {
  entries: Entry[]
  diagnosisList: Diagnosis[]
}

const Entries = (props: Props) => {
  const findDiagnose = (code: Diagnosis["code"]) => {
    const result = props.diagnosisList.find((element) => element.code === code)
    return result?.name
  }
  return (
    <div>
      <h4>Entries:</h4>

      {props.entries.map((e) => {
        return (
          <Paper
            key={e.id}
            elevation={10}
            sx={{ padding: 3, marginBottom: 3, borderRadius: 4 }}
          >
            <p>
              {e.date}, {e.description}
            </p>

            {e.diagnosisCodes?.map((d) => (
              <ul key={d}>
                <li>
                  {d}: {findDiagnose(d)}
                </li>
              </ul>
            ))}
            {<EntryDetails entry={e}></EntryDetails>}
          </Paper>
        )
      })}
    </div>
  )
}

export default Entries
