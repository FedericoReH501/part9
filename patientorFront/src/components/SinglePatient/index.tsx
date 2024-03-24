import { useParams } from "react-router-dom"
import patientService from "../../services/patients"
import { useEffect, useState } from "react"
import { Patient } from "../../types"

const SinglePatient = () => {
  const [patient, setpatient] = useState<Patient>()
  const param = useParams()

  useEffect(() => {
    const fetchPatient = async () => {
      patientService
        .findOne(param.id)
        .then((response) => setpatient(response.data))
    }

    fetchPatient()
  }, [])

  return (
    <>
      <h3>{patient?.name}</h3>
      <p>gender: {patient?.gender}</p>
      <p>ssn: {patient?.ssn}</p>
      <p>occupation: {patient?.occupation}</p>
    </>
  )
}

export default SinglePatient
