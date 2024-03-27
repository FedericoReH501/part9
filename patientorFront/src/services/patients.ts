import axios from "axios"
import { Entry, EntryWithoutId, Patient, PatientFormValues } from "../types"

import { apiBaseUrl } from "../constants"

const getAll = async () => {
  const { data } = await axios.get<Patient[]>(`${apiBaseUrl}/patients`)

  return data
}

const create = async (object: PatientFormValues) => {
  const { data } = await axios.post<Patient>(`${apiBaseUrl}/patients`, object)

  return data
}

const findOne = async (id: string | undefined) => {
  const data = await axios.get<Patient>(`${apiBaseUrl}/patients/${id}`)

  return data
}

const addEntry = async (id: string, newEntry: EntryWithoutId) => {
  const { data } = await axios.post<Entry>(
    `${apiBaseUrl}/patients/${id}`,
    newEntry
  )
  return data
}

export default {
  getAll,
  create,
  findOne,
  addEntry,
}
