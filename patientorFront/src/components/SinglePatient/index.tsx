import { useParams } from "react-router-dom"
import patientService from "../../services/patients"
import { useEffect, useState } from "react"
import { Patient } from "../../types"
import Entries from "./Entries"

const SinglePatient = () => {
  const [patient, setpatient] = useState<Patient>()
  const param = useParams()

  useEffect(() => {
    const fetchPatient = async () => {
      const response = await patientService.findOne(param.id)
      setpatient(response.data)
    }

    fetchPatient()
  }, [])
  if (patient) {
    return (
      <>
        <h3>{patient.name}</h3>
        <p>gender: {patient.gender}</p>
        <p>ssn: {patient.ssn}</p>
        <p>occupation: {patient.occupation}</p>
        <div>
          {patient.entries.length !== 0 ? (
            <Entries entries={patient?.entries}></Entries>
          ) : null}
        </div>
      </>
    )
  }
}

export default SinglePatient
