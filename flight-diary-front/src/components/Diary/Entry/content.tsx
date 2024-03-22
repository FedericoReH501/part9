import { DiaryEntry } from "../../../types/diary"

interface ContentProps {
  data: DiaryEntry
}
const Content = (props: ContentProps) => {
  return (
    <>
      <h3>{props.data.date}</h3>
      <p>visibility: {props.data.visibility}</p>
      <p>weather: {props.data.weather}</p>
    </>
  )
}

export default Content
