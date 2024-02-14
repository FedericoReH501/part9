import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { parseEntries } from "./helper/parseEntries";

const app = express();

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
    res.send("ciao");
  } catch (error: unknown) {
    let errorMessage = "";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
    res.status(403).json({ error: errorMessage });
  }
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
