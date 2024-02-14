import { argsAreValid } from "./helper/argsAreValid";
import { average } from "./helper/average";

interface Analitycs {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const rating = (average: number, target: number) => {
  if (average >= target) {
    return {
      success: true,
      value: 3,
      description: " good Job! kepp going!",
    };
  } else if (average >= target / 2) {
    return {
      success: false,
      value: 2,
      description: "not too bad but could be better",
    };
  }

  return {
    success: false,
    value: 1,
    description: " not enough!!, you must improove next time!!",
  };
};

const calculateExercises = (
  dExcercise: string[],
  target: number,
): Analitycs => {
  let trainingDaysCount: number = 0;
  dExcercise.forEach((d) => {
    if (Number(d) !== 0) {
      trainingDaysCount += 1;
    }
  });
  const ratingObject = rating(average(dExcercise), target);
  return {
    periodLength: dExcercise.length,
    trainingDays: trainingDaysCount,
    ratingDescription: ratingObject.description,
    success: ratingObject.success,
    rating: ratingObject.value,
    target: target,
    average: average(dExcercise),
  };
};
interface ValidDatas {
  dExercise: string[];
  target: number;
}

const parsedData = (args: string[]): ValidDatas => {
  if (!argsAreValid(args)) {
    throw new Error("you must insert only numbers");
  }
  return { dExercise: args.slice(3), target: Number(args[2]) };
};

try {
  const { dExercise, target } = parsedData(process.argv);
  console.log(calculateExercises(dExercise, target));
} catch (error: unknown) {
  let errorMessage: string = "";
  if (error instanceof Error) {
    errorMessage = error.message;
  }
  console.log(errorMessage);
}
