import { Content } from "./components/Content"
import { Total } from "./components/Total"
import { Header } from "./components/header"

const App = () => {
  const courseName = "Half Stack application development"
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
    },
  ]

  const totalExercises = courseParts.reduce(
    (sum, part) => sum + part.exerciseCount,
    0
  )

  return (
    <div>
      <Header courseName={courseName}></Header>
      <Content coursParts={courseParts}></Content>
      <Total total={totalExercises}></Total>
      <p>Number of exercises {totalExercises}</p>
    </div>
  )
}

export default App
