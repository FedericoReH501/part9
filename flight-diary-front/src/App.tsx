import { useState, useEffect } from "react"
import { DiaryEntry } from "./types/diary"
import { getEntryes } from "./services/diary"
import Entry from "./components/Diary/Entry"
import axios from "axios"
import Notify from "./components/Diary/Notify"
import NewEntryForm from "./components/Diary/NewEntry/form"

function App() {
  const [diaryes, setDiaryes] = useState<DiaryEntry[]>([])
  const [message, SetMessage] = useState<string | null>(null)

  const setNotify = (message: string): void => {
    SetMessage(message)
    setTimeout(() => {
      SetMessage(null)
    }, 3000)
  }

  useEffect(() => {
    const fetchDiaryes = async () => {
      try {
        const response = await getEntryes()
        setDiaryes(response)
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setNotify(error.message)
        }
      }
    }

    void fetchDiaryes()
  }, [])
  return (
    <>
      <Notify message={message}></Notify>
      <Entry entryes={diaryes}></Entry>
      <NewEntryForm></NewEntryForm>
    </>
  )
}

export default App
