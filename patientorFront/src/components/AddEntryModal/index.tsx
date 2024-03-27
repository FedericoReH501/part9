import { Diagnosis, Patient, PatientFormValues } from "../../types"
import AddEntryForm from "./AddEntryForm"

interface Props {
  diagnosis: Diagnosis[]
  id: string
  patients: Patient[]
  setPatients: React.Dispatch<React.SetStateAction<Patient[]>>
}

const AddEntryModal = (props: Props) => {
  return (
    <AddEntryForm
      diagnosis={props.diagnosis}
      id={props.id}
      patients={props.patients}
      setPatients={props.setPatients}
    ></AddEntryForm>
  )
}

export default AddEntryModal
