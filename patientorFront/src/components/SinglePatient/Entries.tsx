import { Diagnosis, Entry } from "../../types"

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
          <div key={e.id}>
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
          </div>
        )
      })}
    </div>
  )
}

export default Entries
