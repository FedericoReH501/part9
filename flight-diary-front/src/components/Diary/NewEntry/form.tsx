import { useState } from "react"
import { Visibility, Weather } from "../../../types/diary"

const NewEntryForm = () => {
  const [visibility, SetVisibility] = useState<null | Visibility>(null)
  const [weather, Setweather] = useState<null | Weather>(null)
  const [date, setdate] = useState<null | string>(null)
  const [comment, setcomment] = useState<null | string>(null)
  console.log(visibility)
  console.log(weather)
  console.log(date)
  console.log(comment)

  return (
    <>
      <form>
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
                  onChange={() => {
                    SetVisibility(e)
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
                  onChange={() => {
                    Setweather(e)
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
      </form>
    </>
  )
}

export default NewEntryForm
