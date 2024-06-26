import { useParams } from "react-router-dom"

import { Diagnosis, Patient } from "../../types"
import Entries from "./Entries"
import AddEntryModal from "../AddEntryModal"
interface Props {
  message: string | null
  diagnosisList: Diagnosis[]
  patients: Patient[]
  setPatients: React.Dispatch<React.SetStateAction<Patient[]>>
  setMessage: React.Dispatch<React.SetStateAction<string | null>>
}
const SinglePatient = (props: Props) => {
  const param = useParams()
  const patient = props.patients.find((p) => p.id === param.id)

  if (patient) {
    return (
      <>
        <h2>{patient.name}</h2>
        <p>gender: {patient.gender}</p>
        <p>ssn: {patient.ssn}</p>
        <p>occupation: {patient.occupation}</p>
        <AddEntryModal
          diagnosis={props.diagnosisList}
          id={patient.id}
          patients={props.patients}
          setPatients={props.setPatients}
          message={props.message}
          setMessage={props.setMessage}
        ></AddEntryModal>
        <div>
          {patient.entries.length !== 0 ? (
            <Entries
              entries={patient?.entries}
              diagnosisList={props.diagnosisList}
            ></Entries>
          ) : null}
        </div>
      </>
    )
  }
}

export default SinglePatient
