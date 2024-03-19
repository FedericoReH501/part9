import { CoursePart } from "../types/coursePart"
interface partProps {
  coursePart: CoursePart
}
const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  )
}
export const Part = (props: partProps) => {
  switch (props.coursePart.kind) {
    case "basic":
      return (
        <div>
          <p>{props.coursePart.description}</p>
        </div>
      )
    case "group":
      return (
        <div>
          <p>project exercises: {props.coursePart.groupProjectCount}</p>
        </div>
      )
    case "background":
      return (
        <div>
          <p>{props.coursePart.description}</p>
          <p>submit to: {props.coursePart.backgroundMaterial}</p>
        </div>
      )
    case "special":
      return (
        <div>
          <p>{props.coursePart.description}</p>
          <p>requirements: {props.coursePart.requirements.map((r) => r)}</p>
        </div>
      )

    default:
      return assertNever(props.coursePart)
  }
}
