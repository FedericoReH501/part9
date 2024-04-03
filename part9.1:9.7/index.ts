import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { parseEntries } from "./helper/parseEntries";
import { calculateExercises } from "./exerciseCalculator";
import { bodyIsValid } from "./helper/calculateValidator";
import { BodyRequest } from "./helper/calculateValidator";
const app = express();
app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const params: string[] = Object.values(req.query).filter(
    (value): value is string => typeof value === "string",
  );

  try {
    const { weight, height } = parseEntries(params);
    res.json(calculateBmi(weight, height));
  } catch (error: unknown) {
    let errorMessage = "";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
    res.status(403).json({ error: errorMessage });
  }
});

app.post("/exercises", (req, res) => {
  try {
    bodyIsValid(req.body as BodyRequest);
    const { daily_exercises, target } = req.body as BodyRequest;
    res.json(calculateExercises(daily_exercises, target));
  } catch (error: unknown) {
    let errorMessage: string = "";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    res.status(403).json({ error: errorMessage });
  }
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
