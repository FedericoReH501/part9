import { useState, useEffect } from "react"
import axios from "axios"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import { Button, Divider, Container, Typography } from "@mui/material"

import { apiBaseUrl } from "./constants"
import { Diagnosis, Patient } from "./types"

import patientService from "./services/patients"
import diagnosisService from "./services/diagnosis"
import PatientListPage from "./components/PatientListPage"
import SinglePatient from "./components/SinglePatient"

const App = () => {
  const [patients, setPatients] = useState<Patient[]>([])
  const [diagnosis, setdiagnosis] = useState<Diagnosis[]>([])
  useEffect(() => {
    void axios.get<void>(`${apiBaseUrl}/ping`)

    const fetchData = async () => {
      const patientsData = await patientService.getAll()
      setPatients(patientsData)
      const diagnosisData = await diagnosisService.getAll()
      setdiagnosis(diagnosisData)
    }
    void fetchData()
  }, [])

  return (
    <div className="App">
      <Router>
        <Container>
          <Typography variant="h3" style={{ marginBottom: "0.5em" }}>
            Patientor
          </Typography>
          <Button component={Link} to="/" variant="contained" color="primary">
            Home
          </Button>
          <Divider hidden />
          <Routes>
            <Route
              path="/"
              element={
                <PatientListPage
                  patients={patients}
                  setPatients={setPatients}
                />
              }
            />
            <Route
              path="/:id"
              element={
                <SinglePatient
                  patients={patients}
                  setPatients={setPatients}
                  diagnosisList={diagnosis}
                ></SinglePatient>
              }
            ></Route>
          </Routes>
        </Container>
      </Router>
    </div>
  )
}

export default App
