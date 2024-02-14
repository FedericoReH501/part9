import express from "express"
import { calculateBmi } from "./bmiCalculator"
import { parseEntries } from "./helper/parseEntries"
const app = express()

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!")
})

app.get("/bmi", (req, res) => {
  const params = Object.values(req.query)
  console.log("params", params)

  try {
    const { weight, height } = parseEntries(params)
    res.json(calculateBmi(weight, height))
    res.send("ciao")
  } catch (error: unknown) {
    let errorMessage = ""
    if (error instanceof Error) {
      errorMessage = error.message
    }
    console.log(errorMessage)
    res.status(403).json({ error: errorMessage })
  }
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
