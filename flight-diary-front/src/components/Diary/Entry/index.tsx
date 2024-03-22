import { DiaryEntry } from "../../../types/diary"
import Content from "./content"

interface EntryProps {
  entryes: DiaryEntry[]
}
const Entry = (props: EntryProps) => {
  return (
    <>
      {props.entryes.map((e) => (
        <Content data={e}></Content>
      ))}
    </>
  )
}

export default Entry
