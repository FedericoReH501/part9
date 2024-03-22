import axios from "axios"
import { DiaryEntry } from "../types/diary"

export const getEntryes = async () => {
  const data = await axios.get<DiaryEntry[]>(
    "http://localhost:3000/api/diaries"
  )
  return data.data
}
