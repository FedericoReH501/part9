import { argsAreValid } from "./helper/argsAreValid"
interface ValidData {
  weight: number
  height: number
}

const parseEntries = (args: string[]): ValidData => {
  if (args.length > 4)
    throw new Error("malformatted parameters, too many arguments")
  if (args.length < 4)
    throw new Error("malformatted parameters, not enough arguments")
  if (argsAreValid(args)) {
    return {
      weight: Number(args[3]),
      height: Number(args[2]),
    }
  } else {
    throw new Error("malformatted parameters")
  }
}

export const calculateBmi = (weight: number, height: number): object => {
  const heightConverted: number = height / 100
  const bmi = weight / (heightConverted * heightConverted)
  if (bmi >= 18.5 && bmi <= 24.9) {
    return { weight: weight, height: height, bmi: "Normal (healthy weight)" }
  } else if (bmi < 18.5) {
    return {
      weight: weight,
      height: height,
      bmi: "Underweight,(unhealthy weight)",
    }
  } else if (bmi > 24.9) {
    return {
      weight: weight,
      height: height,
      bmi: "Overrweight,(unhealthy weight)",
    }
  }
  return {}
}
try {
  const { weight, height } = parseEntries(process.argv)
  console.log(calculateBmi(weight, height))
} catch (error: unknown) {
  let errorMessage = ""
  if (error instanceof Error) {
    errorMessage = error.message
  }
  console.log(errorMessage)
}
