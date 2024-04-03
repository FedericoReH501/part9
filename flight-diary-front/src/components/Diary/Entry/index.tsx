import { DiaryEntry } from "../../../types/diary"
import Content from "./content"

interface EntryProps {
  entryes: DiaryEntry[]
}
const Entry = (props: EntryProps) => {
  return (
    <>
      {props.entryes.map((e) => (
        <Content data={e} key={e.date}></Content>
      ))}
    </>
  )
}

export default Entry
