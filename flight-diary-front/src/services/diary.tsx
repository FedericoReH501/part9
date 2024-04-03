import axios from "axios"
import { DiaryEntry } from "../types/diary"

export const getEntryes = async () => {
  const data = await axios.get<DiaryEntry[]>(
    "http://localhost:3000/api/diaries"
  )
  return data.data
}

export const addEntry = async (data: DiaryEntry) => {
  const addedEntry = await axios.post("http://localhost:3000/api/diaries", data)
  return addedEntry.data
}
