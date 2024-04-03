import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { Diagnosis, Patient } from "../../types"
import AddEntryForm from "./AddEntryForm"
import Notify from "../Notify"

interface Props {
  setMessage: React.Dispatch<React.SetStateAction<string | null>>
  message: string | null
  diagnosis: Diagnosis[]
  id: string
  patients: Patient[]
  setPatients: React.Dispatch<React.SetStateAction<Patient[]>>
}

const AddEntryModal = (props: Props) => {
  return (
    <Accordion>
      <AccordionSummary>Add New Entry</AccordionSummary>
      <Notify message={props.message}></Notify>
      <AccordionDetails>
        <AddEntryForm
          setMessage={props.setMessage}
          diagnosis={props.diagnosis}
          id={props.id}
          patients={props.patients}
          setPatients={props.setPatients}
        ></AddEntryForm>
      </AccordionDetails>
    </Accordion>
  )
}

export default AddEntryModal
