interface Course {
  name: string
  exerciseCount: number
}
interface ContentProps {
  coursParts: Course[]
}

export const Content = (props: ContentProps) => {
  return (
    <div>
      {props.coursParts.map((o) => (
        <div>
          <p>{o.name}</p>
          <p>{o.exerciseCount}</p>
        </div>
      ))}
    </div>
  )
}
