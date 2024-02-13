import { argsAreValid } from "./helper/argsAreValid"
interface ValidData {
  weight: number
  height: number
}

const parseEntries = (args: string[]): ValidData => {
  if (args.length > 4) throw new Error("too many arguments")
  if (args.length < 4) throw new Error("not enough arguments")
  if (argsAreValid(args)) {
    return {
      weight: Number(args[3]),
      height: Number(args[2]),
    }
  } else {
    throw new Error("you must enter valid numbers!")
  }
}

const calculateBmi = (weight: number, height: number): string => {
  const heightConverted: number = height / 100
  const bmi = weight / (heightConverted * heightConverted)
  if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal (healthy weight)"
  } else if (bmi < 18.5) {
    return "Underweight,(unhealthy weight)"
  } else if (bmi > 24.9) {
    return "Overrweight,(unhealthy weight)"
  }
  return ""
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
