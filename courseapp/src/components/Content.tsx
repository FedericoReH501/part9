import { CoursePart } from "../types/coursePart"
import { Part } from "./Part"

interface ContentProps {
  coursParts: CoursePart[]
}

export const Content = (props: ContentProps) => {
  return (
    <div>
      {props.coursParts.map((o) => (
        <div>
          <h3>{o.name}</h3>
          <Part coursePart={o}></Part>
        </div>
      ))}
    </div>
  )
}
