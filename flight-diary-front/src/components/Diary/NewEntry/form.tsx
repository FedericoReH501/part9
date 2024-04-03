import React, { useState } from "react"
import { DiaryEntry, Visibility, Weather } from "../../../types/diary"
import { addEntry } from "../../../services/diary"
import axios from "axios"

interface FormProps {
  diaryes: DiaryEntry[]
  setDiaryes: React.Dispatch<React.SetStateAction<DiaryEntry[]>>
  setNotify: (message: string) => void
}

const NewEntryForm = (props: FormProps) => {
  const [visibility, SetVisibility] = useState<Visibility>(" " as Visibility)
  const [weather, Setweather] = useState<Weather>("" as Weather)
  const [date, setdate] = useState<string>("")
  const [comment, setcomment] = useState<string>("")

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    const newEntry = {
      date,
      visibility,
      weather,
      comment,
    }
    try {
      await addEntry(newEntry)
      props.setDiaryes(props.diaryes.concat(newEntry))
    } catch (error) {
      if (axios.isAxiosError(error)) {
        props.setNotify(error.message)
      }
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <h3>Date : </h3>
          <input
            type="date"
            onChange={(e) => {
              setdate(e.target.value)
            }}
          ></input>
        </div>
        <div>
          <h3>Visibility : </h3>
          {Object.values(Visibility).map((e) => {
            return (
              <span key={e}>
                <input
                  type="radio"
                  name="visibility"
                  value={e}
                  onChange={(event) => {
                    const value = event.target.value as Visibility
                    SetVisibility(value)
                  }}
                ></input>
                <label>{e}</label>
              </span>
            )
          })}
        </div>
        <div>
          <h3>Weather : </h3>
          {Object.values(Weather).map((e) => {
            return (
              <span key={e}>
                <input
                  type="radio"
                  name="weather"
                  value={e}
                  onChange={(event) => {
                    Setweather(event.target.value as Weather)
                  }}
                ></input>
                <label>{e}</label>
              </span>
            )
          })}
        </div>
        <h3>Comment: </h3>
        <input
          type="text"
          onChange={(e) => {
            setcomment(e.target.value)
          }}
        ></input>
        <div>
          <button type="submit"> add </button>
        </div>
      </form>
    </>
  )
}

export default NewEntryForm
