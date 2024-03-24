import { Entry } from "../../types"

interface props {
  entries: Entry[]
}

const Entries = (props: props) => {
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
                <li>{d}</li>
              </ul>
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default Entries
